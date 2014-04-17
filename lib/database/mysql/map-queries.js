/*jslint node: true, vars: true, white: true */
"use strict";

module.exports = function(setupQuery) {

	var getAllSolarSystems = setupQuery("SELECT ?? FROM mapSolarSystems", ['fields']);

	var getSolarSystemByID = setupQuery("SELECT ?? FROM mapSolarSystems WHERE solarSystemID = ?", ['fields', 'solarSystemID']);

	var getSolarSystemsInRegion = setupQuery("SELECT ?? FROM mapSolarSystems WHERE regionID = ?", ['fields', 'regionID']);

	var getAllRegions = setupQuery("SELECT ?? FROM mapRegions", ['fields']);

	var getRegionByID = setupQuery("SELECT ?? FROM mapRegions where regionID = ?", ['fields', 'regionID']);

	return {
		getAllSolarSystems:      getAllSolarSystems,
		getSolarSystemByID:      getSolarSystemByID,
		getSolarSystemsInRegion: getSolarSystemsInRegion,
		getAllRegions:           getAllRegions,
		getRegionByID:           getRegionByID
	};
};