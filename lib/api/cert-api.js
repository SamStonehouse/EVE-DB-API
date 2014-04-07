/*jslint node: true, vars: true, white: true */
"use strict";

var Mask = require('./../mask/mask.js');

var maskInterpreter;
var db;

var certMask = new Mask([
	"certID",
	"description",
	"groupid",
	"name"
	]);

var masteriesMask = new Mask([
	"typeID",
	"masteryLevel",
	"certID"
	]);

var skillsMask = new Mask([
	"certID",
	"skillID",
	"certLevelInt",
	"skillLevel",
	"certLevelText"
	]);

var setupRoutes = function(app, next) {
	app.get('/certs', function(req, res) {
		db.getAllCerts(
			{
				fields: maskInterpreter(req.query.fields, certMask)
			},
			next(req, res)
		);
	});

	app.get('/certs/:certID', function(req, res) {
		db.getCertByID(
			{
				certID: req.params.certID,
				fields: maskInterpreter(req.query.fields, certMask)
			},
			next(req, res)
		);
	});

	app.get('/masteries', function(req, res) {
		db.getAllMasteries(
			{
				fields: maskInterpreter(req.query.fields, masteriesMask)
			},
			next(req, res)
		);
	});

	app.get('/masteries/:typeID', function(req, res) {
		db.getMasteryByTypeID(
			{
				typeID: req.params.typeID,
				fields: maskInterpreter(req.query.fields, masteriesMask),
			},
			next(req, res)
		);
	});

	app.get('/certskills', function(req, res) {
		db.getAllCertSkills(
			{
				fields: maskInterpreter(req.query.fields, skillsMask)
			},
			next(req, res)
		);
	});

	app.get('/certskills/:certID', function(req, res) {
		db.getCertSkillsByCertID(
			{
				certID: req.params.certID,
				fields: maskInterpreter(req.query.fields, skillsMask)
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
