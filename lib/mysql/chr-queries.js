/*jslint node: true, vars: true, white: true */
"use strict";

var connection;

var getAllBloodlines = function(properties, fn) {
	var query = "SELECT ?? FROM chrBloodlines";
	connection.query(query, [properties.fields], fn);
};

var getBloodlineByID = function(properties, fn) {
	var query = "SELECT ?? FROM chrBloodlines WHERE bloodlineID = ?";
	connection.query(query, [properties.fields, properties.bloodlineID], fn);
};

var getAllFactions = function(properties, fn) {
	var query = "SELECT ?? FROM chrFactions";
	connection.query(query, [properties.fields], fn);
};

var getFactionByID = function(properties, fn) {
	var query = "SELECT ?? FROM chrFactions WHERE factionID = ?";
	connection.query(query, [properties.fields, properties.factionID], fn);
};

var getAllRaces = function(properties, fn) {
	var query = "SELECT ?? FROM chrRaces";
	connection.query(query, [properties.fields], fn);
};

var getRaceByID = function(properties, fn) {
	var query = "SELECT ?? FROM chrRaces WHERE raceID = ?";
	connection.query(query, [properties.fields, properties.raceID], fn);
};

var getAllAncestries = function(properties, fn) {
	var query = "SELECT ?? FROM chrAncestries";
	connection.query(query, [properties.fields], fn);
};

var getAncestryByID = function(properties, fn) {
	var query = "SELECT ?? FROM chAncestries WHERE ancestryID = ?";
	connection.query(query, [properties.fields, properties.ancestryID], fn);
};

module.exports = function(_connection) {
	connection = _connection;

	return {
		getAllBloodlines: getAllBloodlines,
		getBloodlineByID: getBloodlineByID,
		getAllFactions:   getAllFactions,
		getFactionByID:   getFactionByID,
		getAllRaces:      getAllRaces,
		getRaceByID:      getRaceByID,
		getAllAncestries: getAllAncestries,
		getAncestryByID:  getAncestryByID
	};
};