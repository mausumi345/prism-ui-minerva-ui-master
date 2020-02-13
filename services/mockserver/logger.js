// Copyright (c) 2017 Nutanix Inc. All rights reserved.
//
// Logger class for the dev server
//
/* eslint strict: 'off' */
/* eslint-env node */

'use strict';

var winston = require('winston');
var _ = require('underscore');

module.exports = function(env) {
  // Get environment options
  var debugMode = String(env.debugMode) === 'true';
  var logLevel = (typeof env.logLevel === 'string') ? env.logLevel : 'info';

  // Set transport options
  var consoleTransportOptions = {
    colorize: true,
    showLevel: false,
    prettyPrint: true
  };

  if (debugMode) {
    _.extend(consoleTransportOptions, {
      showLevel: true,
      timestamp: function() {
        var padStr = function(input) {
          return ('0' + input).slice(-2);
        };
        var date = new Date();
        return '[' +
          padStr(date.getHours()) + ':' +
          padStr(date.getMinutes()) + ':' +
          padStr(date.getSeconds()) +
        ']';
      }
    });
  }

  // Create a new winston logger
  return new winston.Logger({
    level: logLevel,
    transports: [
      new winston.transports.Console(consoleTransportOptions)
    ]
  });
};
