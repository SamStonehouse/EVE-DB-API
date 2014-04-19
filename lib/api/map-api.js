/*jslint node: true, vars: true, white: true */
"use strict";

//Module requirements
var apiMasks = require('./api-masks.js');

//Module imports
var db;

var setupRoutes = function(app, next) {
	app.get('/solarsystems', function(req, res) {
		db.getAllSolarSystems(
			{
				fields: apiMasks.solarSystemMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/solarsystems/:solarSystemID', function(req,res) {
		db.getSolarSystemByID(
			{
				solarSystemID: req.params.solarSystemID,
				fields: apiMasks.solarSystemMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/solarsystems/region/:regionID', function(req, res) {
		db.getSolarSystemsInRegion(
			{
				regionID: req.params.regionID,
				fields: apiMasks.solarSystemMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/regions', function(req, res) {
		db.getAllRegions(
			{
				fields: apiMasks.regionMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/regions/:regionID', function(req, res) {
		db.getRegionByID(
			{
				regionID: req.params.regionID,
				fields: apiMasks.regionMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

};

module.exports = function(_db) {
	db = _db;

	return {
		setupRoutes: setupRoutes
	};
};