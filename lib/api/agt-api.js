/*jslint node: true, vars: true, white: true */
"use strict";

//Module requirements
var apiMasks = require('./api-masks.js');

//Module imports
var db;


var setupRoutes = function(app) {
	app.get('/agents', function(req, res) {

		var queryParams = {
			fields: apiMasks.agentMask.getFields(req.query.fields)
		};

		db.getAllAgents(queryParams, res.locals.apiResponse);

	});

	app.get('/agents/:agentID', function(req, res) {

		var queryParams = {
			agentID: req.params.agentID,
			fields: apiMasks.agentMask.getFields(req.query.fields)
		};

		db.getAgentByID(queryParams, res.locals.apiResponse);
	});

	app.get('/agentTypes', function(req, res) {

		var queryParams = {
			fields: apiMasks.agentTypeMask.getFields(req.query.fields)
		};

		db.getAllAgentTypes(queryParams, res.locals.apiResponse);
	});

	app.get('/agentTypes/:agentTypeID', function(req, res) {

		var queryParams = {
			agentTypeID: req.params.agentTypeID,
			fields: apiMasks.agentTypeMask.getFields(req.query.fields)
		};

		db.getAgentTypeByID(queryParams, res.locals.apiResponse);
	});

	app.get('/researchAgents', function(req, res) {

		var queryParams = {
			fields: apiMasks.researchAgentMask.getFields(req.query.fields)
		};

		db.getAllResearchAgents(queryParams, res.locals.apiResponse);
	});

	app.get('/researchAgents/:researchAgentID', function(req, res) {

		var queryParams = {
			researchAgentID: req.params.researchAgentID,
			fields: apiMasks.researchAgentMask.getFields(req.query.fields)
		};

		db.getResearchAgentByID(queryParams, res.locals.apiResponse);
	});
};

module.exports = function(_db) {
	db = _db;
	
	return {
		setupRoutes: setupRoutes
	};
};
