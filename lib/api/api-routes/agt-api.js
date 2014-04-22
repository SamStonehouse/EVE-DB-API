/*jslint node: true, vars: true, white: true */
"use strict";

module.exports = function(agentAPIGroup) {

	agentAPIGroup.addroute('/agents', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.agentMask.getFields(req.query.fields)
		};

		db.agt.getAllAgents(queryParams, responseFn);

	});

	agentAPIGroup.addroute('/agents/:agentID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			agentID: req.params.agentID,
			fields: apiMasks.agentMask.getFields(req.query.fields)
		};

		db.agt.getAgentByID(queryParams, responseFn);
	});

	agentAPIGroup.addroute('/agentTypes', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.agentTypeMask.getFields(req.query.fields)
		};

		db.agt.getAllAgentTypes(queryParams, responseFn);
	});

	agentAPIGroup.addroute('/agentTypes/:agentTypeID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			agentTypeID: req.params.agentTypeID,
			fields: apiMasks.agentTypeMask.getFields(req.query.fields)
		};

		db.agt.getAgentTypeByID(queryParams, responseFn);
	});

	agentAPIGroup.addroute('/researchAgents', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.researchAgentMask.getFields(req.query.fields)
		};

		db.agt.getAllResearchAgents(queryParams, responseFn);
	});

	agentAPIGroup.addroute('/researchAgents/:researchAgentID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			researchAgentID: req.params.researchAgentID,
			fields: apiMasks.researchAgentMask.getFields(req.query.fields)
		};

		db.agt.getResearchAgentByID(queryParams, responseFn);
	});
};
