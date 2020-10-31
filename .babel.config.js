const path = require("path");

const plugins = [
  /** Aliases to be used with storybook */
  [
    require.resolve("babel-plugin-module-resolver"),
    {
      root: [path.resolve(".")],
      extensions: ["(.js|.ts)", "(.tsx|jsx)"],
      alias: {
        "@app-pages": "./src/pages",
        "@app-components": "./src/components",
        "@app-utils": "./src/utils",
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
