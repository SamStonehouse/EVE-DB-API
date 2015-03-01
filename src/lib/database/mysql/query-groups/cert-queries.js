/*jslint node: true, vars: true, white: true */
"use strict";

var connection;

module.exports = function(setupQuery) {

	var queries = {};

	queries.getAllCertificates = setupQuery("SELECT ?? FROM certCerts", ['fields']);

	queries.getCertificateByID = setupQuery("SELECT ?? FROM certCerts WHERE certID = ?", ['fields', 'certID']);

	queries.getAllMasteries = setupQuery("SELECT ?? FROM certMasteries", ['fields']);

	queries.getMasteryByTypeID = setupQuery("SELECT ?? FROM certMasteries WHERE typeID = ?", ['fields', 'typeID']);

	queries.getAllCertSkills = setupQuery("SELECT ?? FROM certSkills", ['fields']);

	queries.getCertSkillsByCertID = setupQuery("SELECT ?? FROM certSkills WHERE certID = ?", ['fields', 'certID']);

	return queries;
};