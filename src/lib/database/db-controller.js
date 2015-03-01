/* jslint node: true, vars: true, white: true */
"use strict";

//Module imports
var cache;

var controller = require('./mysql/mysql-controller'); //To use a different controller require a different module

module.exports = function(_cache) {
	cache = _cache;

	//Set up database controller and provide cache module
	controller = controller(cache);

	return controller;
};