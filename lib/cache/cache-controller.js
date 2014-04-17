/* jslint node: true, vars: true, white: true */
"use strict";

//var cacheController = require('./memcache/memcache-controller');  // Use Memcache
//var cacheController = require('./redis/redis-controller');        // Use Redis
var cacheController = require('./nocache/nocache-controller');      // Don't use cache

module.exports = cacheController;