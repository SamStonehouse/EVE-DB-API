/*jslint node: true, vars: true, white: true */
"use strict";

module.exports = function(mapApiGroup) {
	mapApiGroup.addroute('/solarsystems', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.solarSystemMask.getFields(req.query.fields)
		};

		db.getAllSolarSystems(queryParams, responseFn);
	});

	mapApiGroup.addroute('/solarsystems/:solarSystemID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			solarSystemID: req.params.solarSystemID,
			fields: apiMasks.solarSystemMask.getFields(req.query.fields)
		};

		db.getSolarSystemByID(queryParams, responseFn);
	});

	mapApiGroup.addroute('/solarsystems/region/:regionID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			regionID: req.params.regionID,
			fields: apiMasks.solarSystemMask.getFields(req.query.fields)
		};

		db.getSolarSystemsInRegion(queryParams, responseFn);
	});

	mapApiGroup.addroute('/regions', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.regionMask.getFields(req.query.fields)
		};

		db.getAllRegions(queryParams, responseFn);
	});

	mapApiGroup.addroute('/regions/:regionID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			regionID: req.params.regionID,
			fields: apiMasks.regionMask.getFields(req.query.fields)
		};

		db.getRegionByID(queryParams, responseFn);
	});
};