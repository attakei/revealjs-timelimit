export default {
  input: "./src/plugin.js",
  output: [
    {
      file: "./dist/timelimit.js",
      format: "iife",
      name: "RevealTimelimit",
    },
    {
      file: "./dist/timelimit.esm.js",
      format: "esm",
    },
  ],
};
