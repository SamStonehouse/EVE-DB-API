/*jslint node: true, vars: true, white: true */
"use strict";

//Module requirements
var apiMasks = require('./api-masks.js');

//Module imports
var db;

var setupRoutes = function(app, next) {
	app.get('/npcactivities', function(req, res) {
		db.getAllCorpActivities({
			fields: apiMasks.activitiesMask.getFields(req.query.fields)
		}, next(req, res));
	});

	app.get('/npcactivities/:activityID', function(req, res) {
		db.getCorpActivityByID({
			activityID: req.params.activityID,
			fields: apiMasks.activitiesMask.getFields(req.query.fields)
		}, next(req, res));
	});

	app.get('/npccorporationdivisions', function(req, res) {
		db.getAllNPCCorpDivisions({
			fields: apiMasks.NPCCorpDivisionsMask.getFields(req.query.fields)
		}, next(req, res));
	});

	app.get('/npccorporationdivisions/:corporationID', function(req, res) {
		db.getNPCCorpDivisionsByCorpID({
			corporationID: req.params.corporationID,
			fields: apiMasks.NPCCorpDivisionsMask.getFields(req.query.fields)
		}, next(req, res));
	});

	app.get('/npccorporationresearchfields', function(req, res) {
		db.getAllNPCCorpResearchFields({
			fields: apiMasks.NPCCorpResearchFieldsMask.getFields(req.query.fields)
		}, next(req, res));
	});

	app.get('/npccorporationresearchfields/:corporationID', function(req, res) {
		db.getNPCCorpResearchFieldsByCorpID({
			corporationID: req.params.corporationID,
			fields: apiMasks.NPCCorpResearchFieldsMask.getFields(req.query.fields)
		}, next(req, res));
	});

	app.get('/npccorporations', function(req, res) {
		db.getAllNPCCorps({
			fields: apiMasks.NPCCorpMask.getFields(req.query.fields)
		}, next(req, res));
	});

	app.get('/npccorporations/:corporationID', function(req, res) {
		db.getNPCCorpByCorpID({
			corporationID: req.params.corporationID,
			fields: apiMasks.NPCCorpMask.getFields(req.query.fields)
		}, next(req, res));
	});

	app.get('/npccorporationtrades', function(req, res) {
		db.getAllNPCCorpTrades({
			fields: apiMasks.NPCCorpTradesMask.getFields(req.query.fields)
		}, next(req, res));
	});

	app.get('/npccorporationtrades/:corporationID', function(req, res) {
		db.getNPCCorpTradesByCorpID({
			corporationID: req.params.corporationID,
			fields: apiMasks.NPCCorpTradesMask.getFields(req.query.fields)
		}, next(req, res));
	});

	app.get('/npcdivisions', function(req, res) {
		db.getAllNPCDivisions({
			fields: apiMasks.NPCDivisionsMask.getFields(req.query.fields)
		}, next(req, res));
	});

	app.get('/npcdivisions/:divisionID', function(req, res) {
		db.getNPCDivisionByDivisionID({
			divisionID: req.params.divisionID,
			fields: apiMasks.NPCDivisionsMask.getFields(req.query.fields)
		}, next(req, res));
	});
};

module.exports = function(_db) {
	db = _db;
	
	return {
		setupRoutes: setupRoutes
	};
};
