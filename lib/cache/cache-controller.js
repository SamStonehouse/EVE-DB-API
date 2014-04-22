/* jslint node: true, vars: true, white: true */
"use strict";

// Use Memcache
//var cacheController = require('./memcache/memcache-controller');

// Use Redis
//var cacheController = require('./redis/redis-controller');

// Don't use cache    
var cacheController = require('./nocache/nocache-controller');

module.exports = cacheController;