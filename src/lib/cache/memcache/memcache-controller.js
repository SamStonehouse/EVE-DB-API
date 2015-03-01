/* jslint node: true, vars: true, white: true */
"use strict";

var memcache = require('memcache');

var client = new memcache.Client(11211, 'localhost');

//Well I've fucked this..

var connect = function() {
	console.log("Memcache Connecting...");
	client.connect();
};

var get = function(key, fn) {
	console.log("NOT CONNECTED - Memcache get: " + key);

	fn(undefined, undefined) ;
};

var set = function(key, val, fn) {
	console.log("NOT CONNECTED - Memache set: " + key);

	if (typeof(fn) === "function") {
		fn(undefined);
	}
};


get = function(key, fn) {
	console.log("Memcache get: " + key);


	client.get(key, function(err, result) {
		console.dir(err);
		console.log(result);
		if (result === null || typeof result === "undefined") {
			fn(err, undefined);
		} else {
			fn(err, result);
		}
		
	});
};

set = function(key, val, fn) {
	console.log("Memache set: " + key);
	
	client.set(key, val, function(err) {
		console.dir(err);
		if (typeof(fn) === "function") {
			fn(undefined);
		}
	});
};

client.on('connect', function() {
	console.log("Memcached connected");

});

client.on('error', function(e) {
	console.log("Memcache error: " + e);
});

client.on('close', function(){
	console.log("Memcache connection close, reconnecting...");
	connect();
});

client.on('timeout', function(){
	console.log("Memcached Timeout, reconnecting...");
	connect();
});


module.exports = {
	connect: connect,
	get: get,
	set: set
};