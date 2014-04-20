/*jslint node: true, vars: true, white: true */
"use strict";

//Module requirements
var apiMasks = require('./api-masks.js');

//Module imports
var db;

var setupRoutes = function(app) {
	app.get('/npcactivities', function(req, res) {

		var queryParams = {
			fields: apiMasks.activitiesMask.getFields(req.query.fields)
		};

		db.getAllCorpActivities(queryParams, res.locals.apiResponse);
	});

	app.get('/npcactivities/:activityID', function(req, res) {

		var queryParams = {
			activityID: req.params.activityID,
			fields: apiMasks.activitiesMask.getFields(req.query.fields)
		};

		db.getCorpActivityByID(queryParams, res.locals.apiResponse);
	});

	app.get('/npccorporationdivisions', function(req, res) {

		var queryParams = {
			fields: apiMasks.NPCCorpDivisionsMask.getFields(req.query.fields)
		};

		db.getAllNPCCorpDivisions(queryParams, res.locals.apiResponse);
	});

	app.get('/npccorporationdivisions/:corporationID', function(req, res) {

		var queryParams = {
			corporationID: req.params.corporationID,
			fields: apiMasks.NPCCorpDivisionsMask.getFields(req.query.fields)
		};

		db.getNPCCorpDivisionsByCorpID(queryParams, res.locals.apiResponse);
	});

	app.get('/npccorporationresearchfields', function(req, res) {

		var queryParams = {
			fields: apiMasks.NPCCorpResearchFieldsMask.getFields(req.query.fields)
		};

		db.getAllNPCCorpResearchFields(queryParams, res.locals.apiResponse);
	});

	app.get('/npccorporationresearchfields/:corporationID', function(req, res) {

		var queryParams = {
			corporationID: req.params.corporationID,
			fields: apiMasks.NPCCorpResearchFieldsMask.getFields(req.query.fields)
		};

		db.getNPCCorpResearchFieldsByCorpID(queryParams, res.locals.apiResponse);
	});

	app.get('/npccorporations', function(req, res) {

		var queryParams = {
			fields: apiMasks.NPCCorpMask.getFields(req.query.fields)
		};

		db.getAllNPCCorps(queryParams, res.locals.apiResponse);
	});

	app.get('/npccorporations/:corporationID', function(req, res) {

		var queryParams = {
			corporationID: req.params.corporationID,
			fields: apiMasks.NPCCorpMask.getFields(req.query.fields)
		};

		db.getNPCCorpByCorpID(queryParams, res.locals.apiResponse);
	});

	app.get('/npccorporationtrades', function(req, res) {

		var queryParams = {
			fields: apiMasks.NPCCorpTradesMask.getFields(req.query.fields)
		};

		db.getAllNPCCorpTrades(queryParams, res.locals.apiResponse);
	});

	app.get('/npccorporationtrades/:corporationID', function(req, res) {

		var queryParams = {
			corporationID: req.params.corporationID,
			fields: apiMasks.NPCCorpTradesMask.getFields(req.query.fields)
		};

		db.getNPCCorpTradesByCorpID(queryParams, res.locals.apiResponse);
	});

	app.get('/npcdivisions', function(req, res) {

		var queryParams = {
			fields: apiMasks.NPCDivisionsMask.getFields(req.query.fields)
		};

		db.getAllNPCDivisions(queryParams, res.locals.apiResponse);
	});

	app.get('/npcdivisions/:divisionID', function(req, res) {

		var queryParams = {
			divisionID: req.params.divisionID,
			fields: apiMasks.NPCDivisionsMask.getFields(req.query.fields)
		};

		db.getNPCDivisionByDivisionID(queryParams, res.locals.apiResponse);
	});
};

module.exports = function(_db) {
	db = _db;
	
	return {
		setupRoutes: setupRoutes
	};
};
