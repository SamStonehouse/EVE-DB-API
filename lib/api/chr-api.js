/*jslint node: true, vars: true, white: true */
"use strict";

//Module requirements
var apiMasks = require('./api-masks.js');

//Module imports
var db;

var setupRoutes = function(app, next) {
	app.get('/bloodlines', function(req, res) {
		db.getAllBloodlines({
			fields: apiMasks.bloolineMask.getFields(req.query.fields)
		}, next(req, res));
	});

	app.get('/bloodlines/:bloodlineID', function(req, res) {
			db.getBloodlineByID({
				bloodlineID: req.params.bloodlineID,
				fields: apiMasks.bloolineMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/factions', function(req, res) {
		db.getAllFactions(
			{
				fields: apiMasks.factionMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/factions/:factionID', function(req, res) {
		db.getFactionByID(
			{
				factionID: req.params.factionID,
				fields: apiMasks.factionMask.getFields(req.query.fields)

			},
			next(req, res)
		);
	});

	app.get('/races', function(req, res) {
		db.getAllRaces(
			{
				fields: apiMasks.raceMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/races/:raceID', function(req, res) {
		db.getRaceByID(
			{
				raceID: req.params.raceID,
				fields: apiMasks.raceMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/ancestries', function(req, res) {
		db.getAllAncestries(
			{
				fields: apiMasks.ancestryMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/ancestries/:ancestryID', function(req, res) {
		db.getGetAncestriesByID(
			{
				ancestryID: req.params.ancestryID,
				fields: apiMasks.ancestryMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/attributes', function(req, res) {
		db.getAllAttributes(
			{
				fields: apiMasks.attributeMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/attributes/:attributeID', function(req, res) {
		db.getAttributeByID(
			{
				attributeID: req.params.attributeID,
				fields: apiMasks.attributeMask.getFields(req.query.fields)
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
