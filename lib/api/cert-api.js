/*jslint node: true, vars: true, white: true */
"use strict";

//Module requirements
var apiMasks = require('./api-masks.js');

//Module imports
var db;

var setupRoutes = function(app) {
	app.get('/certs', function(req, res) {

		var queryParams = {
			fields: apiMasks.certMask.getFields(req.query.fields)
		};

		db.getAllCerts(queryParams, res.locals.apiResponse);
	});

	app.get('/certs/:certID', function(req, res) {

		var queryParams = {
			certID: req.params.certID,
			fields: apiMasks.certMask.getFields(req.query.fields)
		};

		db.getCertByID(queryParams, res.locals.apiResponse);
	});

	app.get('/masteries', function(req, res) {

		var queryParams = {
			fields: apiMasks.masteriesMask.getFields(req.query.fields)
		};

		db.getAllMasteries(queryParams, res.locals.apiResponse);
	});

	app.get('/masteries/:typeID', function(req, res) {

		var queryParams = {
			typeID: req.params.typeID,
			fields: apiMasks.masteriesMask.getFields(req.query.fields)
		};

		db.getMasteryByTypeID(queryParams, res.locals.apiResponse);
	});

	app.get('/certskills', function(req, res) {

		var queryParams = {
			fields: apiMasks.skillsMask.getFields(req.query.fields)
		};

		db.getAllCertSkills(queryParams, res.locals.apiResponse);
	});

	app.get('/certskills/:certID', function(req, res) {

		var queryParams = {
			certID: req.params.certID,
			fields: apiMasks.skillsMask.getFields(req.query.fields)
		};

		db.getCertSkillsByCertID(queryParams, res.locals.apiResponse);
	});
};

module.exports = function(_db) {
	db = _db;
	
	return {
		setupRoutes: setupRoutes
	};
};
