/**
* Mask is a method of providing true/false parameters in a simple format
*
* Using binary & to compare a provided mask with 
* 
*/

var Mask = function(values) {
	this.numMasks = 0;
	this.masks = {};
	this.values = [];

	if (Object.prototype.toString.call(values) === '[object Array]') {
		this.addValues(values);
	} else if (typeof values === "string") {
		this.addValue(values);
	}
};

Mask.prototype.addValue = function(value) {
	var newMask = Math.pow(2, this.numMasks);
	this.masks[newMask] = value;
	this.values.push(value);
	++this.numMasks;
	return newMask;
};

Mask.prototype.addValues = function(values) {
	for (var key in values) {
		if(values.hasOwnProperty(key)) {
			this.addValue(values[key]);
		}
	}
};

Mask.prototype.getMaskForValue = function(value) {

	for (var key in this.masks) {
		if (this.masks.hasOwnProperty(key)) {
			if (this.masks[key] === value) {
				return parseInt(key, 10);
			}
		}
	}

	return undefined;
};

Mask.prototype.checkMask = function(mask) {
	var returnVals = [];

	for (var key in this.masks) {
		if (this.masks.hasOwnProperty(key)) {
			if ((mask & key) > 0) {
				returnVals.push(this.masks[key]);
			}
		}
	}

	return returnVals;
};

Mask.prototype.getAllValues = function() {
	return this.values;
};

module.exports = Mask;