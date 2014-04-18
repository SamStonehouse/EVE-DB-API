/*jslint node: true, vars: true, white: true */
"use strict";

var apiMasks = require('./api-masks.js');

var db;


// var APIModule = function(app, apiPrefix, modulePrefix) {
// 	this.app = app;
// 	this.apiPrefix = apiPrefix;
// 	this.modulePrefix = modulePrefix;

// 	this.result = [];
// };

// APIModule.prototype.addRoute = function(route, dbQuery, requestParser) {

// 	var fullRoute = this.apiPrefix + this.modulePrefix + route;

// 	this.app.get(fullRoute, function(req, res) {
// 		console.log("Processing request for: " + fullRoute);
// 		requestParser(req, function(err, properties) {


// 			if (err) {
// 				return this.errorResponse(res, "Internal server error: " + err);
// 			}

// 			console.log("Properties: ");
// 			console.log(properties);

// 			dbQuery(properties, function(err, results) {
// 				if (err) {
// 					return this.errorResponse(res, "Internal Server Error: " + err);
// 				}
				
// 				if (results.length === 0) {
// 					return this.errorResponse(res, "Not found", 404);
// 				}

// 				this.successResponse(res, results);
// 			});
// 		});
// 	});

// 	console.log("Added route for: " + fullRoute);
// };

// APIModule.prototype.errorResponse = function(res, status, message) {
// 	var errorMesesage = message ? message : "Internal Server Error";
// 	var errorStatus = status ? status : 500;

// 	res.set('Content-Type', 'application/json');
// 	res.status(errorStatus).send({ error: true, message: errorMesesage });
// };

// APIModule.prototype.successResponse = function(res, results) {
// 	res.set('Content-Type', 'application/json');
// 	res.send({results: results});
// };

var setupRoutes = function(app, next) {
	//var agentModule = new APIModule(app, "/api", "/agent"	);

	// agentModule.addRoute('/agents', db.getAllAgents, function(req) {
	// 	return {
	// 		fields: maskInterpreter(req.query.fields, agentMask)
	// 	};
	// });


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

module.exports = function(_db) {
	db = _db;
	
	return {
		setupRoutes: setupRoutes
	};
};
