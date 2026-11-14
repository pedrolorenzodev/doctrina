const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

const webBuildOutput = /[\\/]apps[\\/]web[\\/](\.next|test-results|playwright-report)[\\/].*/;
config.resolver.blockList = [config.resolver.blockList].flat().concat(webBuildOutput);

module.exports = config;
