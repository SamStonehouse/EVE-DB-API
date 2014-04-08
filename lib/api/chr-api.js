/*jslint node: true, vars: true, white: true */
"use strict";

var Mask = require('./../mask/mask.js');

var maskInterpreter;
var db;

var bloodlineMask = new Mask([
	"bloodlineID",
	"bloodlineName",
	"raceID",
	"description",
	"maleDescription",
	"femaleDescription",
	"shipTypeID",
	"corporationID",
	"perception",
	"willpower",
	"charisma",
	"memory",
	"intelligence",
	"iconID",
	"shortDescription",
	"shortMaleDescription",
	"shortFemaleDescription"
	]);

var factionMask = new Mask([
	"factionID",
	"factionName",
	"description",
	"raceIDs",
	"solarSystemID",
	"corporationID",
	"sizeFactor",
	"stationCount",
	"stationSystemCount",
	"militiaCorporationID",
	"iconID"
	]);

var raceMask = new Mask([
	"raceID",
	"raceName",
	"description",
	"iconID",
	"shortDescription"
	]);

var ancestryMask = new Mask([
	"ancestryID",
	"ancestryName",
	"bloodlineID",
	"description",
	"perception",
	"willpower",
	"charisma",
	"memory",
	"intelligence",
	"iconID",
	"shortDescription"
	]);

var attributeMask = new Mask([
	"attributeID",
	"attributeName",
	"description",
	"iconID",
	"shortDescription",
	"notes"
	]);

var setupRoutes = function(app, next) {
	app.get('/bloodlines', function(req, res) {
		db.getAllBloodlines({
			fields: maskInterpreter(req.query.fields, bloodlineMask)
		}, next(req, res));
	});

	app.get('/bloodlines/:bloodlineID', function(req, res) {
			db.getBloodlineByID({
				bloodlineID: req.params.bloodlineID,
				fields: maskInterpreter(req.query.fields, bloodlineMask)
			},
			next(req, res)
		);
	});

	app.get('/factions', function(req, res) {
		db.getAllFactions(
			{
				fields: maskInterpreter(req.query.fields, factionMask)
			},
			next(req, res)
		);
	});

	app.get('/factions/:factionID', function(req, res) {
		db.getFactionByID(
			{
				factionID: req.params.factionID,
				fields: maskInterpreter(req.query.fields, factionMask)

			},
			next(req, res)
		);
	});

	app.get('/races', function(req, res) {
		db.getAllRaces(
			{
				fields: maskInterpreter(req.query.fields, raceMask)
			},
			next(req, res)
		);
	});

	app.get('/races/:raceID', function(req, res) {
		db.getRaceByID(
			{
				raceID: req.params.raceID,
				fields: maskInterpreter(req.query.fields, raceMask)
			},
			next(req, res)
		);
	});

	app.get('/ancestries', function(req, res) {
		db.getAllAncestries(
			{
				fields: maskInterpreter(req.query.fields, ancestryMask)
			},
			next(req, res)
		);
	});

	app.get('/ancestries/:ancestryID', function(req, res) {
		db.getGetAncestriesByID(
			{
				ancestryID: req.params.ancestryID,
				fields: maskInterpreter(req.query.fields, ancestryMask)
			},
			next(req, res)
		);
	});

	app.get('/attributes', function(req, res) {
		db.getAllAttributes(
			{
				fields: maskInterpreter(req.query.fields, attributeMask)
			},
			next(req, res)
		);
	});

	app.get('/attributes/:attributeID', function(req, res) {
		db.getAttributeByID(
			{
				attributeID: req.params.attributeID,
				fields: maskInterpreter(req.query.fields, attributeMask)
			},
			next(req, res)
		);
	});
};

module.exports = function(_db, _maskInterpreter) {
	db = _db;
	maskInterpreter = _maskInterpreter;
	
	return {
		setupRoutes: setupRoutes
	};
};
