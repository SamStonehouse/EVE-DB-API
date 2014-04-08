/*jslint node: true, vars: true, white: true */
"use strict";

var Mask = require('./../mask/mask.js');

var maskInterpreter;
var db;

var agentMask = new Mask([
	"agentID",
	"divisionID",
	"corporationID",
	"locationID",
	"level",
	"quality",
	"agentTypeID",
	"isLocator"
	]);

var agentTypeMask = new Mask([
	"agentTypeID",
	"agentType"
	]);

var researchAgentMask = new Mask([
	"agentID",
	"typeID"
	]);

var setupRoutes = function(app, next) {
	app.get('/agents', function(req, res) {
		db.getAllAgents(
			{
				fields: maskInterpreter(req.query.fields, agentMask)
			},
			next(req, res)
		);
	});

	app.get('/agents/:agentID', function(req, res) {
		db.getAgentByID({
				agentID: req.params.agentID,
				fields: maskInterpreter(req.query.fields, agentMask)
			},
			next(req, res)
		);
	});

	app.get('/agentTypes', function(req, res) {
		db.getAllAgentTypes(
			{
				fields: maskInterpreter(req.query.fields, agentTypeMask)
			},
			next(req, res)
		);
	});

	app.get('/agentTypes/:agentTypeID', function(req, res) {
		db.getAgentTypeByID(
			{
				agentTypeID: req.params.agentTypeID,
				fields: maskInterpreter(req.query.fields, agentTypeMask)
			},
			next(req, res)
		);
	});

	app.get('/researchAgents', function(req, res) {
		db.getAllResearchAgents(
			{
				fields: maskInterpreter(req.query.fields, researchAgentMask)
			},
			next(req, res)
		);
	});

	app.get('/researchAgents/:researchAgentID', function(req, res) {
		db.getResearchAgentByID(
			{
				researchAgentID: req.params.researchAgentID,
				fields: maskInterpreter(req.query.fields, researchAgentMask)
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
