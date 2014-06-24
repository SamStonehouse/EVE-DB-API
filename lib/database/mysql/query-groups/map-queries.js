/*jslint node: true, vars: true, white: true */
"use strict";

module.exports = function(setupQuery) {

	var queries = {};

	queries.getAllSolarSystems = setupQuery("SELECT ?? FROM mapSolarSystems", ['fields']);

	queries.getSolarSystemByID = setupQuery("SELECT ?? FROM mapSolarSystems WHERE solarSystemID = ?", ['fields', 'solarSystemID']);

	queries.getSolarSystemsInRegion = setupQuery("SELECT ?? FROM mapSolarSystems WHERE regionID = ?", ['fields', 'regionID']);

	queries.getAllRegions = setupQuery("SELECT ?? FROM mapRegions", ['fields']);

	queries.getRegionByID = setupQuery("SELECT ?? FROM mapRegions where regionID = ?", ['fields', 'regionID']);

	queries.getAllSolarSystemJumps = setupQuery("SELECT ?? FROM mapSolarSystemJumps", ['fields']);

	queries.getSolarSystemJumpsBySolarSystemID = setupQuery("SELECT ?? FROM mapSolarSystemJumps WHERE fromSolarSystemID = ?", ['fields', 'solarSystemID']);

	return queries;
};