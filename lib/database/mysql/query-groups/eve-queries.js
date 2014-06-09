/*jslint node: true, vars: true, white: true */
"use strict";

module.exports = function(setupQuery) {

	var queries = {};

	queries.getAllUnits = setupQuery("SELECT ?? FROM eveUnits", ['fields']);

	queries.getUnitByID = setupQuery("SELECT ?? FROM eveUnits WHERE unitID = ?", ['fields', 'unitID']);

	return queries;
};