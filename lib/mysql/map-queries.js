/*jslint node: true, vars: true, white: true */
"use strict";

var connection;

var getAllSolarSystems = function(properties, fn) {
	var query = "SELECT ?? FROM mapSolarSystems";
	connection.query(query, [properties.fields], fn);
};

var getSolarSystemByID = function(properties, fn) {
	var query = "SELECT ?? FROM mapSolarSystems WHERE solarSystemID = ?";
	connection.query(query, [properties.fields, properties.solarSystemID], fn);
};

var getSolarSystemsInRegion = function(properties, fn) {
	var query = "SELECT ?? FROM mapSolarSystems WHERE regionID = ?";
	connection.query(query, [properties.fields, properties.regionID], fn);
};

var getAllRegions = function(properties, fn) {
	var query = "SELECT ?? FROM mapRegions";
	connection.query(query, [properties.fields], fn);
};

var getRegionByID = function(properties, fn) {
	var query = "SELECT ?? FROM mapRegions where regionID = ?";
	connection.query(query, [properties.fields, properties.regionID], fn);
};

module.exports = function(_connection) {
	connection = _connection;

	return {
		getAllSolarSystems:      getAllSolarSystems,
		getSolarSystemByID:      getSolarSystemByID,
		getSolarSystemsInRegion: getSolarSystemsInRegion,
		getAllRegions:           getAllRegions,
		getRegionByID:           getRegionByID
	};
};