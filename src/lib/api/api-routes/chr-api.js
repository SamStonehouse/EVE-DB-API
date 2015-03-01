/*jslint node: true, vars: true, white: true */
"use strict";

module.exports = function(chrAPIGroup) {
	chrAPIGroup.addroute('/bloodlines', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.bloolineMask.getFields(req.query.fields)
		};

		db.chr.getAllBloodlines(queryParams, responseFn);
	});

	chrAPIGroup.addroute('/bloodlines/:bloodlineID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			bloodlineID: req.params.bloodlineID,
			fields: apiMasks.bloolineMask.getFields(req.query.fields)
		};
		
		db.chr.getBloodlineByID(queryParams, responseFn);
	});

	chrAPIGroup.addroute('/factions', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.factionMask.getFields(req.query.fields)
		};

		db.chr.getAllFactions(queryParams, responseFn);
	});

	chrAPIGroup.addroute('/factions/:factionID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			factionID: req.params.factionID,
			fields: apiMasks.factionMask.getFields(req.query.fields)
		};

		db.chr.getFactionByID(queryParams, responseFn);
	});

	chrAPIGroup.addroute('/races', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.raceMask.getFields(req.query.fields)
		};

		db.chr.getAllRaces(queryParams, responseFn);
	});

	chrAPIGroup.addroute('/races/:raceID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			raceID: req.params.raceID,
			fields: apiMasks.raceMask.getFields(req.query.fields)
		};

		db.chr.getRaceByID(queryParams, responseFn);
	});

	chrAPIGroup.addroute('/ancestries', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.ancestryMask.getFields(req.query.fields)
		};

		db.chr.getAllAncestries(queryParams, responseFn);
	});

	chrAPIGroup.addroute('/ancestries/:ancestryID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			ancestryID: req.params.ancestryID,
			fields: apiMasks.ancestryMask.getFields(req.query.fields)
		};

		db.chr.getGetAncestriesByID(queryParams, responseFn);
	});

	chrAPIGroup.addroute('/attributes', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.attributeMask.getFields(req.query.fields)
		};

		db.chr.getAllAttributes(queryParams, responseFn);
	});

	chrAPIGroup.addroute('/attributes/:attributeID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			attributeID: req.params.attributeID,
			fields: apiMasks.attributeMask.getFields(req.query.fields)
		};

		db.chr.getAttributeByID(queryParams, responseFn);
	});
};
