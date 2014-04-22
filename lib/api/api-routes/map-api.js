/*jslint node: true, vars: true, white: true */
"use strict";

//Module requirements
var apiMasks = require('./api-masks.js');

//Module imports
var db;

var setupRoutes = function(app) {
	app.get('/solarsystems', function(req, res) {

		var queryParams = {
			fields: apiMasks.solarSystemMask.getFields(req.query.fields)
		};

		db.getAllSolarSystems(queryParams, res.locals.apiResponse);
	});

	app.get('/solarsystems/:solarSystemID', function(req,res) {

		var queryParams = {
			solarSystemID: req.params.solarSystemID,
			fields: apiMasks.solarSystemMask.getFields(req.query.fields)
		};

		db.getSolarSystemByID(queryParams, res.locals.apiResponse);
	});

	app.get('/solarsystems/region/:regionID', function(req, res) {

		var queryParams = {
			regionID: req.params.regionID,
			fields: apiMasks.solarSystemMask.getFields(req.query.fields)
		};

		db.getSolarSystemsInRegion(queryParams, res.locals.apiResponse);
	});

	app.get('/regions', function(req, res) {

		var queryParams = {
			fields: apiMasks.regionMask.getFields(req.query.fields)
		};

		db.getAllRegions(queryParams, res.locals.apiResponse);
	});

	app.get('/regions/:regionID', function(req, res) {

		var queryParams = {
			regionID: req.params.regionID,
			fields: apiMasks.regionMask.getFields(req.query.fields)
		};

		db.getRegionByID(queryParams, res.locals.apiResponse);
	});

};

module.exports = function(_db) {
	db = _db;

	return {
		setupRoutes: setupRoutes
	};
};