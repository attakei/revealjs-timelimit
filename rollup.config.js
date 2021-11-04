const path = require('path');
const license = require("rollup-plugin-license");

const licenseOptions = {
  banner: {
    commentStyle: "ignored",
    content: `
      <%= pkg.name %> v<%= pkg.version %>
      <%= pkg.homepage %>
      <%= pkg.license %>

      (c) 2021 Kazuya Takei
    `,
  }
}

export default {
  input: "./src/plugin.js",
  output: [
    {
      file: "./dist/timelimit.js",
      format: "iife",
      name: "RevealTimelimit",
      plugins: [
        license(licenseOptions)
      ],
    },
    {
      file: "./dist/timelimit.esm.js",
      format: "esm",
      plugins: [
        license(licenseOptions)
      ],
    },
  ],
};
