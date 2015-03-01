/*jslint node: true, vars: true, white: true */
"use strict";

module.exports = function(setupQuery) {

	var queries = {};

	queries.getAllBloodlines = setupQuery("SELECT ?? FROM chrBloodlines", ['fields']);

	queries.getBloodlineByID = setupQuery("SELECT ?? FROM chrBloodlines WHERE bloodlineID = ?", ['fields', 'bloodlineID']);

	queries.getAllFactions = setupQuery("SELECT ?? FROM chrFactions", ['fields']);

	queries.getFactionByID = setupQuery("SELECT ?? FROM chrFactions WHERE factionID = ?", ['fields', 'factionID']);

	queries.getAllRaces = setupQuery("SELECT ?? FROM chrRaces", ['fields']);

	queries.getRaceByID = setupQuery("SELECT ?? FROM chrRaces WHERE raceID = ?", ['fields', 'raceID']);

	queries.getAllAncestries = setupQuery("SELECT ?? FROM chrAncestries", ['fields']);

	queries.getAncestryByID = setupQuery("SELECT ?? FROM chrAncestries WHERE ancestryID = ?", ['fields', 'ancestryID']);

	queries.getAllAttributes = setupQuery("SELECT ?? FROM chrAttributes", ['fields']);

	queries.getAttributeByID = setupQuery("SELECT ?? FROM chrAttributes WHERE attributeID = ?", ['fields', 'attributeID']);

	return queries;
};