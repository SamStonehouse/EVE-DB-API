/*jslint node: true, vars: true, white: true */
"use strict";

var Mask = require('./../mask/mask.js');

var next;
var maskInterpreter;
var db;


var solarSystemMask = new Mask([
	"regionID",
	"constellationID",
	"solarSystemID",
	"solarSystemName",
	"x",
	"y",
	"z",
	"xMin",
	"xMax",
	"yMin",
	"yMax",
	"zMin",
	"zMax",
	"luminosity",
	"border",
	"fringe",
	"corridor",
	"hub",
	"international",
	"regional",
	"constellation",
	"security",
	"factionID",
	"radius",
	"sunTypeID",
	"securityClass"
	]);

var regionMask = new Mask([
	"regionID",
	"regionName",
	"x",
	"y",
	"z",
	"xMin",
	"xMax",
	"yMin",
	"yMax",
	"zMin",
	"zMax",
	"factionID",
	"radius"
	]);

var setupRoutes = function(app, next) {
	app.get('/solarsystems', function(req, res) {
		db.getAllSolarSystems(
			{
				fields: maskInterpreter(req.query.fields, solarSystemMask)
			},
			next(req, res)
		);
	});

	app.get('/solarsystems/:solarSystemID', function(req,res) {
		db.getSolarSystemByID(
			{
				solarSystemID: req.params.solarSystemID,
				fields: maskInterpreter(req.query.fields, solarSystemMask)
			},
			next(req, res)
		);
	});

	app.get('/solarsystems/region/:regionID', function(req, res) {
		db.getSolarSystemsInRegion(
			{
				regionID: req.params.regionID,
				fields: maskInterpreter(req.query.fields, solarSystemMask)
			},
			next(req, res)
		);
	});

	app.get('/regions', function(req, res) {
		db.getAllRegions(
			{
				fields: maskInterpreter(req.query.fields, regionMask)
			},
			next(req, res)
		);
	});

	app.get('/regions/:regionID', function(req, res) {
		db.getRegionByID(
			{
				regionID: req.params.regionID,
				fields: maskInterpreter(req.query.fields, regionMask)
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