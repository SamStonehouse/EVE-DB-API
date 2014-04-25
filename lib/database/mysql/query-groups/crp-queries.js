/*jslint node: true, vars: true, white: true */
"use strict";


module.exports = function(setupQuery) {

	var queries = {};

	queries.getAllCorpActivities = setupQuery("SELECT ?? FROM crpActivities", ['fields']);

	queries.getCorpActivityByID = setupQuery("SELECT ?? FROM crpActivities WHERE activityID = ?", ['fields', 'activityID']);

	queries.getAllNPCCorpDivisions = setupQuery("SELECT ?? FROM crpNPCCorporationDivisions", ['fields']);

	queries.getNPCCorpDivisionsByCorpID = setupQuery("SELECT ?? FROM crpNPCCorporationDivisions WHERE corporationID = ?", ['fields', 'corporationID']);

	queries.getAllNPCCorpResearchFields = setupQuery("SELECT ?? FROM crpNPCCorporationResearchFields", ['fields']);

	queries.getNPCCorpResearchFieldsByCorpID = setupQuery("SELECT ?? FROM crpNPCCorporationResearchFields WHERE corporationID = ?", ['fields', 'corporationID']);

	queries.getAllNPCCorps = setupQuery("SELECT ?? FROM crpNPCCorporations", ['fields']);

	queries.getNPCCorpByCorpID =  setupQuery("SELECT ?? FROM crpNPCCorporations WHERE corporationID = ?", ['fields', 'corporationID']);

	queries.getAllNPCCorpTrades = setupQuery("SELECT ?? FROM crpNPCCorporationTrades", ['fields']);

	queries.getNPCCorpTradesByCorpID = setupQuery("SELECT ?? FROM crpNPCCorporationTrades WHERE corporationID = ?", ['fields', 'corporationID']);

	queries.getAllNPCDivisions = setupQuery("SELECT ?? FROM crpNPCDivisions", ['fields']);

	queries.getNPCDivisionByDivisionID = setupQuery("SELECT ?? FROM crpNPCDivisions WHERE divisionID = ?", ['fields', 'divisionID']);

	return queries;
};