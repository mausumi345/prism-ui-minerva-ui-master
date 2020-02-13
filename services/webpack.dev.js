/* eslint-disable no-console */
//
// Copyright (c) 2019 Nutanix Inc. All rights reserved.
//
// The standalone app webpack configuration (development)
//
const path = require('path');
const chalk = require('chalk');

var config = require('./webpack.common.js');

// Constant with our paths
const paths = {
  public: path.resolve(__dirname, 'public'),
  dist: path.resolve(__dirname, 'dist'),
  src: path.resolve(__dirname, 'src')
};

let proxy = {};
let https = false;

const userName = process.env.USERNAME || 'admin';
const pwd =  process.env.PASSWORD || 'Nutanix.123';
const proxyServer = process.env.PROXY || 'http://localhost:5000';

// Proxy Configuration for override of the default
if( !process.env.PROXY ) {
  console.log('Usage: USERNAME=admin PASSWORD=\'Nutanix.123\' PROXY=\'https://10.2.3.4:9440\' npm run dev');
}

const pConfig = {
  auth: `${userName}:${pwd}`,
  target: proxyServer,
  secure: false,
  changeOrigin : true,
  ws : true,
  xfwd : true
};

// List of end points to proxy
proxy = {
  '/api/nutanix/v3' : pConfig
};
https = (proxyServer.indexOf('https') === 0);

console.log('Starting Server -- Proxying to:',
  chalk.yellow(JSON.stringify(proxyServer)));


// Webpack configuration
//----------------------
module.exports = {
  ...config,
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    https,
    proxy,
    port: 3000
  },
  entry: ['babel-polyfill', path.join(paths.src, 'index_dev.js')],
  output: {
    path: paths.dist,
    filename: 'app.bundle.js'
  },
  // Enable importing JS files without specifying their's extension
  resolve: {
    alias: {
    },
    extensions: ['.js', '.jsx']
  }
};
