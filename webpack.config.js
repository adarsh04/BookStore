const path = require('path');

module.exports = {
  entry: ['babel-polyfill','./src/app.js'],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    proxy: {
      "/api": "http://localhost:5000"
    },
    historyApiFallback: true
  }
};
