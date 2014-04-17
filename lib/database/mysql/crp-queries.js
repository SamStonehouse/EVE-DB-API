/*jslint node: true, vars: true, white: true */
"use strict";


module.exports = function(setupQuery) {
	var getAllCorpActivities = setupQuery("SELECT ?? FROM crpActivities", ['fields']);

	var getCorpActivityByID = setupQuery("SELECT ?? FROM crpActivities WHERE activityID = ?", ['fields', 'activityID']);

	var getAllNPCCorpDivisions = setupQuery("SELECT ?? FROM crpNPCCorporationDivisions", ['fields']);

	var getNPCCorpDivisionsByCorpID = setupQuery("SELECT ?? FROM crpNPCCorporationDivisions WHERE corporationID = ?", ['fields', 'corporationID']);

	var getAllNPCCorpResearchFields = setupQuery("SELECT ?? FROM crpNPCCorporationResearchFields", ['fields']);

	var getNPCCorpResearchFieldsByCorpID = setupQuery("SELECT ?? FROM crpNPCCorporationResearchFields WHERE corporationID = ?", ['fields', 'corporationID']);

	var getAllNPCCorps = setupQuery("SELECT ?? FROM crpNPCCorporations", ['fields']);

	var getNPCCorpByCorpID =  setupQuery("SELECT ?? FROM crpNPCCorporations WHERE corporationID = ?", ['fields', 'corporationID']);

	var getAllNPCCorpTrades = setupQuery("SELECT ?? FROM crpNPCCorporationTrades", ['fields']);

	var getNPCCorpTradesByCorpID = setupQuery("SELECT ?? FROM crpNPCCorporationTrades WHERE corporationID = ?", ['fields', 'corporationID']);

	var getAllNPCDivisions = setupQuery("SELECT ?? FROM crpNPCDivisions", ['fields']);

	var getNPCDivisionByDivisionID = setupQuery("SELECT ?? FROM crpNPCDivisions WHERE divisionID = ?", ['fields', 'divisionID']);

	return {
		getAllCorpActivities: getAllCorpActivities,
		getCorpActivityByID: getCorpActivityByID,
		getAllNPCCorpDivisions: getAllNPCCorpDivisions,
		getNPCCorpDivisionsByCorpID: getNPCCorpDivisionsByCorpID,
		getAllNPCCorpResearchFields: getAllNPCCorpResearchFields,
		getNPCCorpResearchFieldsByCorpID: getNPCCorpResearchFieldsByCorpID,
		getAllNPCCorps: getAllNPCCorps,
		getNPCCorpByCorpID: getNPCCorpByCorpID,
		getAllNPCCorpTrades: getAllNPCCorpTrades,
		getNPCCorpTradesByCorpID: getNPCCorpTradesByCorpID,
		getAllNPCDivisions: getAllNPCDivisions,
		getNPCDivisionByDivisionID: getNPCDivisionByDivisionID
	};
};