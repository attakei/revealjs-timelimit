/**
 * Main source of this project
 *
 * @module revealjs-timelimit
 * @license Apache-2.0
 */

/**
 * Configuration for revealjs-timelimit
 *
 * @type {object}
 */
const DefaultConfig = {
  /**
   * Time to move shutdown slide forcely (secs)
   *
   * @type {number}
   */
  timeout: 600,
  /**
   * Message of shutdown slide
   *
   * @type {string}
   */
  content: "TIME IS OVER!!",
};

/**
 * Make Element object for display about "TIME IS OVER"
 *
 * @param {object} config
 * @returns {Element} Showing section element
 */
const createFinishSection = (config) => {
  const section = document.createElement("section");
  section.innerHTML = config.content;
  return section;
};

/**
 * Go to SHUTDOWN section
 * When it call this function, insert SHUTDOWN section at last and move last of slide.
 *
 * @param {Reveal} deck - Reveal.js presentation
 * @param {object} config - Configuration of this plugin
 */
const shutdownPresentation = (deck, config) => {
  console.debug("Time is over!! Shutdown presentation");
  const section = createFinishSection(config);
  document.getElementsByClassName("slides")[0].append(section);
  while (!deck.isLastSlide()) {
    deck.next();
  }
};

/**
 * Defenition about behavior as plugin
 */
const Plugin = () => {
  return {
    id: "timelimit",
    init: (deck) => {
      const initConfig = deck.getConfig().timelimit || {};
      const config = { ...DefaultConfig, ...initConfig };
      let timerEnabled = true;
      let timerId = null;
      deck.on("slidechanged", () => {
        if (!timerEnabled) {
          return;
        }
        if (timerId === null) {
          console.debug("Start timer of revealjs-timelimit");
          timerId = setTimeout(() => {
            timerEnabled = false;
            shutdownPresentation(deck, config);
          }, config.timeout * 1000);
          return;
        }
        if (deck.isLastSlide()) {
          console.debug("Conguraturations!! You arrived at last of slide.");
          clearTimeout(timerId);
          timerEnabled = false;
          return;
        }
      });
    },
  };
};

export default Plugin;
