/*jslint node: true, vars: true, white: true */
"use strict";

module.exports = function(setupQuery) {

	var getAllBloodlines = setupQuery("SELECT ?? FROM chrBloodlines", ['fields']);

	var getBloodlineByID = setupQuery("SELECT ?? FROM chrBloodlines WHERE bloodlineID = ?", ['fields', 'bloodlineID']);

	var getAllFactions = setupQuery("SELECT ?? FROM chrFactions", ['fields']);

	var getFactionByID = setupQuery("SELECT ?? FROM chrFactions WHERE factionID = ?", ['fields', 'factionID']);

	var getAllRaces = setupQuery("SELECT ?? FROM chrRaces", ['fields']);

	var getRaceByID = setupQuery("SELECT ?? FROM chrRaces WHERE raceID = ?", ['fields', 'raceID']);

	var getAllAncestries = setupQuery("SELECT ?? FROM chrAncestries", ['fields']);

	var getAncestryByID = setupQuery("SELECT ?? FROM chrAncestries WHERE ancestryID = ?", ['fields', 'ancestryID']);

	var getAllAttributes = setupQuery("SELECT ?? FROM chrAttributes", ['fields']);

	var getAttributeByID = setupQuery("SELECT ?? FROM chrAttributes WHERE attributeID = ?", ['fields', 'attributeID']);

	return {
		getAllBloodlines: getAllBloodlines,
		getBloodlineByID: getBloodlineByID,
		getAllFactions:   getAllFactions,
		getFactionByID:   getFactionByID,
		getAllRaces:      getAllRaces,
		getRaceByID:      getRaceByID,
		getAllAncestries: getAllAncestries,
		getAncestryByID:  getAncestryByID,
		getAllAttributes: getAllAttributes,
		getAttributeByID: getAttributeByID
	};
};