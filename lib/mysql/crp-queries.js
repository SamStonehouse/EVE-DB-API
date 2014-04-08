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

var getAllNPCCorpDivisions = function(properties, fn) {
	var query = "SELECT ?? FROM crpNPCCorporationDivisions";
	connection.query(query, [properties.fields], fn);
};

var getNPCCorpDivisionsByCorpID = function(properties, fn) {
	var query = "SELECT ?? FROM crpNPCCorporationDivisions WHERE corporationID = ?";
	connection.query(query, [properties.fields, properties.corporationID], fn);
};

var getNPPCorpResearchFields = function(properties, fn) {
	var query = "SELECT ?? FROM crpNPCCorporationResearchFields";
	connection.query(query, [properties.fields], fn);
};

var getNPCCorpResearchFieldsByCorpID = function(properties, fn) {
	var query = "SELECT ?? FROM crpNPCCorporationResearchFields WHERE corporationID = ?";
	connection.query(query, [properties.fields, properties.corporationID], fn);
};

var getAllNPCCorps = function(properties, fn) {
	var query = "SELECT ?? FROM crpNPCCorporations";
	connection.query(query, [properties.fields], fn);
};

var getNPCCorpByCorpID = function(properties, fn) {
	var query = "SELECT ?? FROM crpNPCCorporations WHERE corporationID = ?";
	connection.query(query, [properties.fields], fn);
};

module.exports = function(_connection) {
	connection = _connection;

	return {

	};
};