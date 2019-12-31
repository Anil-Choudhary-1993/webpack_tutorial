const webPackMergeConfig = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = webPackMergeConfig(baseConfig, {
  mode: 'development',
  devServer: {
    port: 3000
  },
  devtool: 'source-map'
})
