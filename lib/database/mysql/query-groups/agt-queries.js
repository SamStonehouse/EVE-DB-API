/* jslint node: true, vars: true, white: true */
"use strict";

module.exports = function(setupQuery) {

	var queries = {};

	queries.getAllAgents = setupQuery("SELECT ?? FROM agtAgents", ['fields']);

	queries.getAgentByID = setupQuery("SELECT ?? from agtAgents WHERE agentID = ?", ['fields', 'agentID']);

	queries.getAllAgentTypes = setupQuery("SELECT ?? from agtAgentTypes" ['fields']);

	queries.getAgentTypeByID = setupQuery("SELECT ?? from agtAgentTypes where agentTypeID = ?", ['fields', 'agentTypeID']);

	queries.getAllResearchAgents = setupQuery("SELECT ?? FROM agtResearchAgents", ['fields']);

	queries.getResearchAgentByID = setupQuery("SELECT ?? FROM agtResearchAgents WHERE agentID = ?", ['fields', 'researchAgentID']);

	return queries;
};