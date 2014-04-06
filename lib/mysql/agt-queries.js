/*jslint node: true, vars: true, white: true */
"use strict";

var connection;

var getAllAgents = function(properties, fn) {
	var query = "SELECT ?? FROM agtAgents";
	connection.query(query,[properties.fields], fn);
};

var getAgentByID = function(properties, fn) {
	var query = "SELECT ?? from agtAgents WHERE agentID = ?";
	connection.query(query, [properties.fields, properties.agentID], fn);
};

var getAllAgentTypes = function(properties, fn) {
	var query = "SELECT ?? from agtAgentTypes";
	connection.query(query, [properties.fields], fn);
};

var getAgentTypeByID = function(properties, fn) {
	var query = "SELECT ?? from agtAgentTypes where agentTypeID = ?";
	connection.query(query, [properties.fields, properties.agentTypeID], fn);
};

var getAllResearchAgents = function(properties, fn) {
	var query = "SELECT ?? FROM agtResearchAgents";
	connection.query(query, [properties.fields], fn);
};

var getResearchAgentByID = function(properties, fn) {
	var query = "SELECT ?? FROM agtResearchAgents WHERE agentID = ?";
	connection.query(query, [properties.fields, properties.researchAgentID], fn);
};

module.exports = function(_connection) {
	connection = _connection;

	return {
		getAllAgents: getAllAgents,
		getAgentByID: getAgentByID,
		getAllAgentTypes: getAllAgentTypes,
		getAgentTypeByID: getAgentTypeByID,
		getAllResearchAgents: getAllResearchAgents,
		getResearchAgentByID: getResearchAgentByID
	};
};