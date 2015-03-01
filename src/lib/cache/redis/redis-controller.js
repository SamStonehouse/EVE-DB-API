/* jslint node: true, vars: true, white: true */
"use strict";

var connect = function() {
	console.log("Redis Connect");
};

var get = function(key, fn) {
	console.log("Redis get: " + key);
	fn(undefined, undefined) ;
};

var set = function(key, val, fn) {
	console.log("Redis set: " + key);
	
	if (typeof(fn) === "function") {
		fn(undefined);
	}
};

module.exports = {
	connect: connect,
	get: get,
	set: set
};