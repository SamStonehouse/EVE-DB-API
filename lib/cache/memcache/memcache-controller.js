/* jslint node: true, vars: true, white: true */
"use strict";

var connect = function() {
	console.log("Memcache Connect");
};

var get = function(key, fn) {
	console.log("Memcache get: " + key);
	fn(undefined, undefined) ;
};

var set = function(key, val, fn) {
	console.log("Memache set: " + key);
	
	if (typeof(fn) === "function") {
		fn(undefined);
	}
};

module.exports = {
	connect: connect,
	get: get,
	set: set
};