/*jslint node: true, vars: true, white: true */
"use strict";

//Function which executes its callback after the function has been called so many times
var counterCallback = function(_countLimit, callback, _onceOnly) {
	var count = 0;
	var countLimit = _countLimit;
	var done = false;

	var onceOnly = _onceOnly;

	return function() {
		count++;

		if ((count >= countLimit) && (!done || !onceOnly)) {
			done = true;
			callback.apply(this, arguments);
		}
	};
};


module.exports = {
	counterCallback: counterCallback
};