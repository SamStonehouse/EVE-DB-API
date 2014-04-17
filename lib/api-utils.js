/*jslint node: true, vars: true, white: true */
"use strict";

var apiResponse = function(req, res) {
	return function(err, results) {
		res.set('Content-Type', 'application/json');

		if (err) {
			res.status(500).send({ error: true, message: 'Internal Server Error: ' + err });
		} else {
			if (results.length === 0) {
				res.status(404).send({ error: true, message: '404 Not Found'});
			} else {
				res.send({results: results});
			}
		}
	};
};

var getFields = function(providedMask, fieldMask) {
	var fields = fieldMask.checkMask(providedMask);

	if (fields === undefined) {
		return fieldMask.getAllValues();
	}

	if ((Object.prototype.toString.call(fields) === '[object Array]') && (fields.length > 0)) {
		return fields;
	}

	return fieldMask.getAllValues();
};



module.exports = {
	apiResponse: apiResponse,
	maskInterpreter: getFields
};
