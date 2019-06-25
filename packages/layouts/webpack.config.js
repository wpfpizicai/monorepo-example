const webpack = require('webpack');
const resolve = require('path').resolve;
module.exports = {
  mode: 'development',
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  devtool: 'cheap-source-map',
  entry: {
    forcelayout: './src/forcelayout/index.js',
    render: './src/render/svg/index.js',
    demo: './demo/index.js'
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'build/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true
          }
        }
      }
    ]
  }
};
