/*jslint node: true, vars: true, white: true */
"use strict";

var connection;

var getAllBloodlines = function(properties, fn) {
	var query = "SELECT ?? FROM chrBloodlines";
	connection.query(query, [properties.fields], fn);
};

var getAllFactions = function(properties, fn) {
	var query = "SELECT ?? FROM chrFactions";
	connection.query(query, [properties.fields], fn);
};

var getAllRaces = function(properties, fn) {
	var query = "SELECT ?? FROM chrRaces";
	connection.query(query, [properties.fields], fn);
};

var getAllAncestries = function(properties, fn) {
	var query = "SELECT ?? FROM chrAncestries";
	connection.query(query, [properties.fields], fn);
};

module.exports = function(_connection) {
	connection = _connection;

	return {
		getAllBloodlines: getAllBloodlines,
		getAllFactions:   getAllFactions,
		getAllRaces:      getAllRaces,
		getAllAncestries: getAllAncestries,
	};
};