//
// Copyright (c) 2019 Nutanix Inc. All rights reserved.
//
// The common webpack configuration
//
/* eslint-env node */
var path = require('path');
var webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Constant with our paths
const paths = {
  public: path.resolve(__dirname, 'public'),
  dist: path.resolve(__dirname, 'dist'),
  src: path.resolve(__dirname, 'src')
};

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, 'src/index_dev.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    filename: 'minervaFiles.js',
    publicPath: '/files'
  },
  // Tell webpack to use html plugin
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.public, 'index.html')
    }),
    new ExtractTextPlugin('style.bundle.css')
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      // CSS loader for CSS files
      // Files will get handled by css loader and then passed to the extract text plugin
      // which will write it to the file we defined above
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      // File loader for image assets -> ADDED IN THIS STEP
      // We'll add only image extensions, but you can add things like svgs, fonts and videos
      {
        test: /\.(woff|woff2|eot|eot\?iefix|ttf|svg|gif|png|jpg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  }
};
