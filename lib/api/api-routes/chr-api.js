/*jslint node: true, vars: true, white: true */
"use strict";

module.exports = function(crtAPIGroup) {
	crtAPIGroup.addRoute('/bloodlines', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.bloolineMask.getFields(req.query.fields)
		};

		db.getAllBloodlines(queryParams, responseFn);
	});

	crtAPIGroup.addRoute('/bloodlines/:bloodlineID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			bloodlineID: req.params.bloodlineID,
			fields: apiMasks.bloolineMask.getFields(req.query.fields)
		};
		
		db.getBloodlineByID(queryParams, responseFn);
	});

	crtAPIGroup.addRoute('/factions', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.factionMask.getFields(req.query.fields)
		};

		db.getAllFactions(queryParams, responseFn);
	});

	crtAPIGroup.addRoute('/factions/:factionID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			factionID: req.params.factionID,
			fields: apiMasks.factionMask.getFields(req.query.fields)
		};

		db.getFactionByID(queryParams, responseFn);
	});

	crtAPIGroup.addRoute('/races', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.raceMask.getFields(req.query.fields)
		};

		db.getAllRaces(queryParams, responseFn);
	});

	crtAPIGroup.addRoute('/races/:raceID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			raceID: req.params.raceID,
			fields: apiMasks.raceMask.getFields(req.query.fields)
		};

		db.getRaceByID(queryParams, responseFn);
	});

	crtAPIGroup.addRoute('/ancestries', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.ancestryMask.getFields(req.query.fields)
		};

		db.getAllAncestries(queryParams, responseFn);
	});

	crtAPIGroup.addRoute('/ancestries/:ancestryID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			ancestryID: req.params.ancestryID,
			fields: apiMasks.ancestryMask.getFields(req.query.fields)
		};

		db.getGetAncestriesByID(queryParams, responseFn);
	});

	crtAPIGroup.addRoute('/attributes', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.attributeMask.getFields(req.query.fields)
		};

		db.getAllAttributes(queryParams, responseFn);
	});

	crtAPIGroup.addRoute('/attributes/:attributeID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			attributeID: req.params.attributeID,
			fields: apiMasks.attributeMask.getFields(req.query.fields)
		};

		db.getAttributeByID(queryParams, responseFn);
	});
};
