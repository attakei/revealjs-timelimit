import { terser } from "rollup-plugin-terser";

const terserOptions = {
  output: {
    comments: false,
  },
};

export default {
  input: "./src/plugin.js",
  output: [
    {
      file: "./dist/timelimit.min.js",
      format: "iife",
      name: "RevealTimelimit",
      plugins: [terser(terserOptions)],
    },
    {
      file: "./dist/timelimit.esm.js",
      format: "esm",
      plugins: [terser(terserOptions)],
    },
  ],
};
