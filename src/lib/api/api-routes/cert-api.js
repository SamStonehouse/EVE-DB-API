/*jslint node: true, vars: true, white: true */
"use strict";

module.exports = function(certAPIGroup) {
	certAPIGroup.addroute('/certs', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.certMask.getFields(req.query.fields)
		};

		db.cert.getAllCertificates(queryParams, responseFn);
	});

	certAPIGroup.addroute('/certs/:certID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			certID: req.params.certID,
			fields: apiMasks.certMask.getFields(req.query.fields)
		};

		db.cert.getCertByID(queryParams, responseFn);
	});

	certAPIGroup.addroute('/masteries', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.masteriesMask.getFields(req.query.fields)
		};

		db.cert.getAllMasteries(queryParams, responseFn);
	});

	certAPIGroup.addroute('/masteries/:typeID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			typeID: req.params.typeID,
			fields: apiMasks.masteriesMask.getFields(req.query.fields)
		};

		db.cert.getMasteryByTypeID(queryParams, responseFn);
	});

	certAPIGroup.addroute('/certskills', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.skillsMask.getFields(req.query.fields)
		};

		db.cert.getAllCertSkills(queryParams, responseFn);
	});

	certAPIGroup.addroute('/certskills/:certID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			certID: req.params.certID,
			fields: apiMasks.skillsMask.getFields(req.query.fields)
		};

		db.cert.getCertSkillsByCertID(queryParams, responseFn);
	});
};
