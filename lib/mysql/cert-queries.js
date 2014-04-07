/*jslint node: true, vars: true, white: true */
"use strict";

var connection;

var getAllCertificates = function(properties, fn) {
	var query = "SELECT ?? FROM certCerts";
	connection.query(query, [properties.fields], fn);
};

var getCertificateByID = function(properties, fn) {
	var query = "SELECT ?? FROM certCerts WHERE certID = ?";
	connection.query(query, [properties.fields, properties.certID], fn);
};

var getAllMasteries = function(properties, fn) {
	var query = "SELECT ?? FROM certMasteries";
	connection.query(query,[properties.fields], fn);
};

var getMasteryByTypeID = function(properties, fn) {
	var query = "SELECT ?? FROM certMasteries WHERE typeID = ?";
	connection.query(query, [properties.fields, properties.typeID], fn);
};

var getAllCertSkills = function(properties, fn) {
	var query = "SELECT ?? FROM certSkills";
	connection.query(query, [properties.fields], fn);
};

var getCertSkillsByCertID = function(properties, fn) {
	var query = "SELECT ?? FROM certSkills WHERE certID = ?";
	connection.query(query, [properties.fields, properties.certID], fn);
};

module.exports = function(_connection) {
	connection = _connection;

	return {
		getAllCertificates: getAllCertificates,
		getCertificateByID: getCertificateByID,
		getAllMasteries: getAllMasteries,
		getMasteryByTypeID: getMasteryByTypeID,
		getAllCertSkills: getAllCertSkills,
		getCertSkillsByCertID: getCertSkillsByCertID
	};
};