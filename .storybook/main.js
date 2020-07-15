const path = require("path");
module.exports = {
  stories: ["../packages/**/*.stories.[tj]sx"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    {
      name: "@storybook/preset-typescript",
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, "../tsconfig.json"),
        },
        include: [path.resolve(__dirname)],
      },
    },
  ],
};
