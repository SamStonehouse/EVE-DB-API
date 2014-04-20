/*jslint node: true, vars: true, white: true */
"use strict";

//Module requirements
var apiMasks = require('./api-masks.js');

//Module imports
var db;

var setupRoutes = function(app) {
	app.get('/bloodlines', function(req, res) {

		var queryParams = {
			fields: apiMasks.bloolineMask.getFields(req.query.fields)
		};

		db.getAllBloodlines(queryParams, res.locals.apiResponse);
	});

	app.get('/bloodlines/:bloodlineID', function(req, res) {

		var queryParams = {
			bloodlineID: req.params.bloodlineID,
			fields: apiMasks.bloolineMask.getFields(req.query.fields)
		};
		
		db.getBloodlineByID(queryParams, res.locals.apiResponse);
	});

	app.get('/factions', function(req, res) {

		var queryParams = {
			fields: apiMasks.factionMask.getFields(req.query.fields)
		};

		db.getAllFactions(queryParams, res.locals.apiResponse);
	});

	app.get('/factions/:factionID', function(req, res) {

		var queryParams = {
			factionID: req.params.factionID,
			fields: apiMasks.factionMask.getFields(req.query.fields)
		};

		db.getFactionByID(queryParams, res.locals.apiResponse);
	});

	app.get('/races', function(req, res) {

		var queryParams = {
			fields: apiMasks.raceMask.getFields(req.query.fields)
		};

		db.getAllRaces(queryParams, res.locals.apiResponse);
	});

	app.get('/races/:raceID', function(req, res) {

		var queryParams = {
			raceID: req.params.raceID,
			fields: apiMasks.raceMask.getFields(req.query.fields)
		};

		db.getRaceByID(queryParams, res.locals.apiResponse);
	});

	app.get('/ancestries', function(req, res) {

		var queryParams = {
			fields: apiMasks.ancestryMask.getFields(req.query.fields)
		};

		db.getAllAncestries(queryParams, res.locals.apiResponse);
	});

	app.get('/ancestries/:ancestryID', function(req, res) {

		var queryParams = {
			ancestryID: req.params.ancestryID,
			fields: apiMasks.ancestryMask.getFields(req.query.fields)
		};

		db.getGetAncestriesByID(queryParams, res.locals.apiResponse);
	});

	app.get('/attributes', function(req, res) {

		var queryParams = {
			fields: apiMasks.attributeMask.getFields(req.query.fields)
		};

		db.getAllAttributes(queryParams, res.locals.apiResponse);
	});

	app.get('/attributes/:attributeID', function(req, res) {

		var queryParams = {
			attributeID: req.params.attributeID,
			fields: apiMasks.attributeMask.getFields(req.query.fields)
		};

		db.getAttributeByID(queryParams, res.locals.apiResponse);
	});
};

module.exports = function(_db) {
	db = _db;
	
	return {
		setupRoutes: setupRoutes
	};
};
