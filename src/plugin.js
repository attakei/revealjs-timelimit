const createFinishSection = () => {
  const section = document.createElement("section");
  section.innerHTML = "TIME IS OVER!!";
  return section;
};

const shutdownPresentation = (deck) => {
  console.debug("Time is over!! Shutdown presentation");
  const section = createFinishSection();
  document.getElementsByClassName("slides")[0].append(section);
  while (!deck.isLastSlide()) {
    deck.next();
  }
};

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
