/**
 * Main source of this project
 *
 * @module revealjs-timelimit
 * @license Apache-2.0
 */

/**
 * Make Element object for display about "TIME IS OVER"
 *
 * @returns {Element} Showing section element
 */
const createFinishSection = () => {
  const section = document.createElement("section");
  section.innerHTML = "TIME IS OVER!!";
  return section;
};

/**
 * Go to SHUTDOWN section
 * When it call this function, insert SHUTDOWN section at last and move last of slide.
 *
 * @params {Reveal} Reveal.js presentation
 */
const shutdownPresentation = (deck) => {
  console.debug("Time is over!! Shutdown presentation");
  const section = createFinishSection();
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
      deck.on("ready", () => {
        console.debug("Start timer of revealjs-timelimit");
        setTimeout(() => shutdownPresentation(deck), 300 * 1000);
      });
    },
  };
};

export default Plugin;
