const path = require("path");

const plugins = [
  ["styled-components", { ssr: true }],
  [
    require.resolve("babel-plugin-module-resolver"),
    {
      root: [path.resolve(".")],
      extensions: ["(.js|.ts)", "(.tsx|jsx)"],
      alias: {
        "@sscrum-pages": "./src/pages",
        "@sscrum-components": "./src/components",
        "@sscrum-utils": "./src/utils",
      },
    },
  ],
];

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["next/babel"],
    plugins: plugins,
  };
};
