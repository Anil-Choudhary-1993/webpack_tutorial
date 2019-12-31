const webPackMergeConfig = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
module.exports = webPackMergeConfig(baseConfig, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'webpack_analyzer.html'
    })
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
})
