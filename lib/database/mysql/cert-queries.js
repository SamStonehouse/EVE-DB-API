/*jslint node: true, vars: true, white: true */
"use strict";

var connection;

module.exports = function(setupQuery) {
	var getAllCertificates = setupQuery("SELECT ?? FROM certCerts", ['fields']);

	var getCertificateByID = setupQuery("SELECT ?? FROM certCerts WHERE certID = ?", ['fields', 'certID']);

	var getAllMasteries = setupQuery("SELECT ?? FROM certMasteries", ['fields']);

	var getMasteryByTypeID = setupQuery("SELECT ?? FROM certMasteries WHERE typeID = ?", ['fields', 'typeID']);

	var getAllCertSkills = setupQuery("SELECT ?? FROM certSkills", ['fields']);

	var getCertSkillsByCertID = setupQuery("SELECT ?? FROM certSkills WHERE certID = ?", ['fields', 'certID']);

	return {
		getAllCertificates: getAllCertificates,
		getCertificateByID: getCertificateByID,
		getAllMasteries: getAllMasteries,
		getMasteryByTypeID: getMasteryByTypeID,
		getAllCertSkills: getAllCertSkills,
		getCertSkillsByCertID: getCertSkillsByCertID
	};
};