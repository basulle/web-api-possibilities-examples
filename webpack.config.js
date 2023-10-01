const { merge } = require("webpack-merge");
const webWorkerConfig = require("./web-workers/webpack.config");
const serviceWorkerConfig = require("./service-workers/webpack.config");
const PWAConfig = require("./progressive-web-app/webpack.config");

const CONFIG = {
  "web-worker": webWorkerConfig,
  "service-worker": serviceWorkerConfig,
  pwa: PWAConfig,
};

const defaultConfig = {
  mode: "development",
};

module.exports = (env, args) => {
  return merge(defaultConfig, CONFIG[env.target]);
};
