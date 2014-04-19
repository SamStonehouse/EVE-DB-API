/*jslint node: true, vars: true, white: true */
"use strict";

//Module requirements
var apiMasks = require('./api-masks.js');

//Module imports
var db;
var apiUtils;


var setupRoutes = function(app) {

	app.get('/agents', function(req, res) {
		db.getAllAgents(
			{
				fields: apiMasks.agentMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/agents/:agentID', function(req, res) {
		db.getAgentByID({
				agentID: req.params.agentID,
				fields: apiMasks.agentMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/agentTypes', function(req, res) {
		db.getAllAgentTypes(
			{
				fields: apiMasks.agentTypeMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/agentTypes/:agentTypeID', function(req, res) {
		db.getAgentTypeByID(
			{
				agentTypeID: req.params.agentTypeID,
				fields: apiMasks.agentTypeMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/researchAgents', function(req, res) {
		db.getAllResearchAgents(
			{
				fields: apiMasks.researchAgentMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/researchAgents/:researchAgentID', function(req, res) {
		db.getResearchAgentByID(
			{
				researchAgentID: req.params.researchAgentID,
				fields: apiMasks.researchAgentMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});
};

module.exports = function(_db, _apiUtils) {
	db = _db;
	apiUtils = _apiUtils;
	
	return {
		setupRoutes: setupRoutes
	};
};
