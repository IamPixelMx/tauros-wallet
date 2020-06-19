const path = require('path');
const { aliases } = require('./aliases');
const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: [path.resolve('./')],
      alias: { ...aliases },
    },
  ],
  'babel-plugin-emotion',
];
module.exports = {
  presets: ['next/babel'],
  plugins: [...plugins],
};
