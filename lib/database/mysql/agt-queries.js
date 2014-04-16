/* jslint node: true, vars: true, white: true */
"use strict";

var setupQuery;

module.exports = function(_setupQuery) {
	setupQuery = _setupQuery;
	
	var getAllAgents = setupQuery("SELECT ?? FROM agtAgents", ['fields']);

	var getAgentByID = setupQuery("SELECT ?? from agtAgents WHERE agentID = ?", ['fields', 'agentID']);

	var getAllAgentTypes = setupQuery("SELECT ?? from agtAgentTypes" ['fields']);

	var getAgentTypeByID = setupQuery("SELECT ?? from agtAgentTypes where agentTypeID = ?", ['fields', 'agentTypeID']);

	var getAllResearchAgents = setupQuery("SELECT ?? FROM agtResearchAgents", ['fields']);

	var getResearchAgentByID = setupQuery("SELECT ?? FROM agtResearchAgents WHERE agentID = ?", ['fields', 'researchAgentID']);


	return {
		getAllAgents: getAllAgents,
		getAgentByID: getAgentByID,
		getAllAgentTypes: getAllAgentTypes,
		getAgentTypeByID: getAgentTypeByID,
		getAllResearchAgents: getAllResearchAgents,
		getResearchAgentByID: getResearchAgentByID
	};
};