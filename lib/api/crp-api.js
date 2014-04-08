/*jslint node: true, vars: true, white: true */
"use strict";

var Mask = require('./../mask/mask.js');

var maskInterpreter;
var db;

var activitiesMask = new Mask([
	"activityID",
	"activityName",
	"description"
	]);

var NPCCorpDivisionsMask = new Mask([
	"corporationID",
	"divisionID",
	"size"
	]);

var NPCCorpResearchFieldsMask = new Mask([
	"skillID",
	"corporationID"
	]);

var NPCCorpMask = new Mask([
	"corporationID",
	"size",
	"extent",
	"solarSystemID",
	"investorID1",
	"investorShares1",
	"investorID2",
	"investorShares2",
	"investorID3",
	"investorShares3",
	"investorID4",
	"investorShares4",
	"friendID",
	"enemyID",
	"publicShares",
	"initialPrice",
	"minSecurity",
	"scattered",
	"fringe",
	"corridor",
	"hub",
	"border",
	"factionID",
	"sizeFactor",
	"stationCount",
	"stationSystemCount",
	"description",
	"iconID"
	]);

var NPCCorpTradesMask = new Mask([
	"corporationID",
	"typeID"
	]);

var NPCDivisionsMask = new Mask([
	"divisionID",
	"divisionName",
	"description",
	"leaderType"
	]);

var setupRoutes = function(app, next) {
	app.get('/npcactivities', function(req, res) {
		db.getAllCorpActivities({
			fields: maskInterpreter(req.query.fields, activitiesMask)
		}, next(req, res));
	});

	app.get('/npcactivities/:activityID', function(req, res) {
		db.getCorpActivityByID({
			activityID: req.params.activityID,
			fields: maskInterpreter(req.query.fields, activitiesMask)
		}, next(req, res));
	});

	app.get('/npccorporationdivisions', function(req, res) {
		db.getAllNPCCorpDivisions({
			fields: maskInterpreter(req.query.fields, NPCCorpDivisionsMask)
		}, next(req, res));
	});

	app.get('/npccorporationdivisions/:corporationID', function(req, res) {
		db.getNPCCorpDivisionsByCorpID({
			corporationID: req.params.corporationID,
			fields: maskInterpreter(req.query.fields, NPCCorpDivisionsMask)
		}, next(req, res));
	});

	app.get('/npccorporationresearchfields', function(req, res) {
		db.getAllNPCCorpResearchFields({
			fields: maskInterpreter(req.query.fields, NPCCorpResearchFieldsMask)
		}, next(req, res));
	});

	app.get('/npccorporationresearchfields/:corporationID', function(req, res) {
		db.getNPCCorpResearchFieldsByCorpID({
			corporationID: req.params.corporationID,
			fields: maskInterpreter(req.query.fields, NPCCorpResearchFieldsMask)
		}, next(req, res));
	});

	app.get('/npccorporations', function(req, res) {
		db.getAllNPCCorps({
			fields: maskInterpreter(req.query.fields, NPCCorpMask)
		}, next(req, res));
	});

	app.get('/npccorporations/:corporationID', function(req, res) {
		db.getNPCCorpByCorpID({
			corporationID: req.params.corporationID,
			fields: maskInterpreter(req.query.fields, NPCCorpMask)
		}, next(req, res));
	});

	app.get('/npccorporationtrades', function(req, res) {
		db.getAllNPCCorpTrades({
			fields: maskInterpreter(req.query.fields, NPCCorpTradesMask)
		}, next(req, res));
	});

	app.get('/npccorporationtrades/:corporationID', function(req, res) {
		db.getNPCCorpTradesByCorpID({
			corporationID: req.params.corporationID,
			fields: maskInterpreter(req.query.fields, NPCCorpTradesMask)
		}, next(req, res));
	});

	app.get('/npcdivisions', function(req, res) {
		db.getAllNPCDivisions({
			fields: maskInterpreter(req.query.fields, NPCDivisionsMask)
		}, next(req, res));
	});

	app.get('/npcdivisions/:divisionID', function(req, res) {
		db.getNPCDivisionByDivisionID({
			divisionID: req.params.divisionID,
			fields: maskInterpreter(req.query.fields, NPCDivisionsMask)
		}, next(req, res));
	});
};

module.exports = function(_db, _maskInterpreter) {
	db = _db;
	maskInterpreter = _maskInterpreter;
	
	return {
		setupRoutes: setupRoutes
	};
};
