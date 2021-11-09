import license from "rollup-plugin-license";
import { terser } from "rollup-plugin-terser";

const licenseOptions = {
  banner: {
    commentStyle: "ignored",
    content: `
      <%= pkg.name %> v<%= pkg.version %>
      URL: <%= pkg.homepage %>

      Copyright 2021 <%= pkg.author =>

      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
   
          http://www.apache.org/licenses/LICENSE-2.0
   
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
    `,
  },
};

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
      plugins: [terser(terserOptions), license(licenseOptions)],
    },
    {
      file: "./dist/timelimit.esm.js",
      format: "esm",
      plugins: [terser(terserOptions), license(licenseOptions)],
    },
  ],
};
