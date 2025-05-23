const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const exclusionList = require('metro-config/src/defaults/exclusionList'); // ⚠️ required for blacklist

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    blockList: exclusionList([
      /node_modules\/.*\/@supabase\/realtime-js.*/,
      /node_modules\/.*\/ws.*/,
      /node_modules\/.*\/http.*/,
      /node_modules\/.*\/stream.*/,
      /node_modules\/.*\/crypto.*/,
    ]),
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

