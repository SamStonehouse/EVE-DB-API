/*jslint node: true, vars: true, white: true */
"use strict";

module.exports = function(chrAPIGroup) {
	chrAPIGroup.addroute('/bloodlines', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.bloolineMask.getFields(req.query.fields)
		};

		db.getAllBloodlines(queryParams, responseFn);
	});

	chrAPIGroup.addroute('/bloodlines/:bloodlineID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			bloodlineID: req.params.bloodlineID,
			fields: apiMasks.bloolineMask.getFields(req.query.fields)
		};
		
		db.getBloodlineByID(queryParams, responseFn);
	});

	chrAPIGroup.addroute('/factions', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.factionMask.getFields(req.query.fields)
		};

		db.getAllFactions(queryParams, responseFn);
	});

	chrAPIGroup.addroute('/factions/:factionID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			factionID: req.params.factionID,
			fields: apiMasks.factionMask.getFields(req.query.fields)
		};

		db.getFactionByID(queryParams, responseFn);
	});

	chrAPIGroup.addroute('/races', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.raceMask.getFields(req.query.fields)
		};

		db.getAllRaces(queryParams, responseFn);
	});

	chrAPIGroup.addroute('/races/:raceID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			raceID: req.params.raceID,
			fields: apiMasks.raceMask.getFields(req.query.fields)
		};

		db.getRaceByID(queryParams, responseFn);
	});

	chrAPIGroup.addroute('/ancestries', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.ancestryMask.getFields(req.query.fields)
		};

		db.getAllAncestries(queryParams, responseFn);
	});

	chrAPIGroup.addroute('/ancestries/:ancestryID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			ancestryID: req.params.ancestryID,
			fields: apiMasks.ancestryMask.getFields(req.query.fields)
		};

		db.getGetAncestriesByID(queryParams, responseFn);
	});

	chrAPIGroup.addroute('/attributes', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.attributeMask.getFields(req.query.fields)
		};

		db.getAllAttributes(queryParams, responseFn);
	});

	chrAPIGroup.addroute('/attributes/:attributeID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			attributeID: req.params.attributeID,
			fields: apiMasks.attributeMask.getFields(req.query.fields)
		};

		db.getAttributeByID(queryParams, responseFn);
	});
};
