/*jslint node: true, vars: true, white: true */
"use strict";

//Module requirements
var apiMasks = require('./api-masks.js');

//Module imports
var db;


var setupRoutes = function(app, next) {
	app.get('/certs', function(req, res) {
		db.getAllCerts(
			{
				fields: apiMasks.certMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/certs/:certID', function(req, res) {
		db.getCertByID(
			{
				certID: req.params.certID,
				fields: apiMasks.certMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/masteries', function(req, res) {
		db.getAllMasteries(
			{
				fields: apiMasks.masteriesMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/masteries/:typeID', function(req, res) {
		db.getMasteryByTypeID(
			{
				typeID: req.params.typeID,
				fields: apiMasks.masteriesMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/certskills', function(req, res) {
		db.getAllCertSkills(
			{
				fields: apiMasks.skillsMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/certskills/:certID', function(req, res) {
		db.getCertSkillsByCertID(
			{
				certID: req.params.certID,
				fields: apiMasks.skillsMask.getFields(req.query.fields)
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
