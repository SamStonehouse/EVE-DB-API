/*jslint node: true, vars: true, white: true */
"use strict";

var Mask = require('./../mask/mask.js');

var next;
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

var setupRoutes = function(app, next) {
	app.get('/bloodlines', function(req, res) {
		db.getAllBloodlines(
			{
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

	app.get('/races', function(req, res) {
		db.getAllRaces(
			{
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
};

module.exports = function(_db, _maskInterpreter) {
	db = _db;
	maskInterpreter = _maskInterpreter;
	
	return {
		setupRoutes: setupRoutes
	};
};
