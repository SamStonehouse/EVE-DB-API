/*jslint node: true, vars: true, white: true */
"use strict";

module.exports = function(crpAPIGroup) {
	crpAPIGroup.addroute('/npcactivities', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.activitiesMask.getFields(req.query.fields)
		};

		db.getAllCorpActivities(queryParams, responseFn);
	});

	crpAPIGroup.addroute('/npcactivities/:activityID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			activityID: req.params.activityID,
			fields: apiMasks.activitiesMask.getFields(req.query.fields)
		};

		db.getCorpActivityByID(queryParams, responseFn);
	});

	crpAPIGroup.addroute('/npccorporationdivisions', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.NPCCorpDivisionsMask.getFields(req.query.fields)
		};

		db.getAllNPCCorpDivisions(queryParams, responseFn);
	});

	crpAPIGroup.addroute('/npccorporationdivisions/:corporationID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			corporationID: req.params.corporationID,
			fields: apiMasks.NPCCorpDivisionsMask.getFields(req.query.fields)
		};

		db.getNPCCorpDivisionsByCorpID(queryParams, responseFn);
	});

	crpAPIGroup.addroute('/npccorporationresearchfields', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.NPCCorpResearchFieldsMask.getFields(req.query.fields)
		};

		db.getAllNPCCorpResearchFields(queryParams, responseFn);
	});

	crpAPIGroup.addroute('/npccorporationresearchfields/:corporationID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			corporationID: req.params.corporationID,
			fields: apiMasks.NPCCorpResearchFieldsMask.getFields(req.query.fields)
		};

		db.getNPCCorpResearchFieldsByCorpID(queryParams, responseFn);
	});

	crpAPIGroup.addroute('/npccorporations', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.NPCCorpMask.getFields(req.query.fields)
		};

		db.getAllNPCCorps(queryParams, responseFn);
	});

	crpAPIGroup.addroute('/npccorporations/:corporationID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			corporationID: req.params.corporationID,
			fields: apiMasks.NPCCorpMask.getFields(req.query.fields)
		};

		db.getNPCCorpByCorpID(queryParams, responseFn);
	});

	crpAPIGroup.addroute('/npccorporationtrades', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.NPCCorpTradesMask.getFields(req.query.fields)
		};

		db.getAllNPCCorpTrades(queryParams, responseFn);
	});

	crpAPIGroup.addroute('/npccorporationtrades/:corporationID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			corporationID: req.params.corporationID,
			fields: apiMasks.NPCCorpTradesMask.getFields(req.query.fields)
		};

		db.getNPCCorpTradesByCorpID(queryParams, responseFn);
	});

	crpAPIGroup.addroute('/npcdivisions', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.NPCDivisionsMask.getFields(req.query.fields)
		};

		db.getAllNPCDivisions(queryParams, responseFn);
	});

	crpAPIGroup.addroute('/npcdivisions/:divisionID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			divisionID: req.params.divisionID,
			fields: apiMasks.NPCDivisionsMask.getFields(req.query.fields)
		};

		db.getNPCDivisionByDivisionID(queryParams, responseFn);
	});
};
