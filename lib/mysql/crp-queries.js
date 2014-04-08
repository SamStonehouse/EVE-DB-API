/*jslint node: true, vars: true, white: true */
"use strict";

var connection;

var getAllCorpActivities = function(properties, fn) {
	var query = "SELECT ?? FROM crpActivities";
	connection.query(query, [properties.fields], fn);
};

var getCorpActivityByID = function(properties, fn) {
	var query = "SELECT ?? FROM crpActivities WHERE activityID = ?";
	connection.query(query, [properties.fields, properties.activityID], fn);
};

var getNPCCorpDivisions = function(properties, fn) {
	var query = "SELECT ?? FROM crpNPCCorporationDivisions";
	connection.query(query, [properties.fields], fn);
};

var getNPCCorpDivisionsByCorporationID = function(properties, fn) {
	var query = "SELECT ?? FROM crpNPCCorporationDivisions WHERE corporationID = ?";
	connection.query(query, [properties.fields, properties.corporationID], fn);
};

module.exports = function(_connection) {
	connection = _connection;

	return {

	};
};