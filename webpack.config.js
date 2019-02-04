const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'main.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        use: [{
          loader: 'riot-tag-loader',
          options: {
            hot: true,
            type: 'es6',
          }
        }]
      },
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        use: [{
          loader: 'riot-tag-loader',
          options: {
            hot: true,
            template: 'pug',
            type: 'es6',
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}