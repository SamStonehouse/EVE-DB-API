/*jslint node: true, vars: true, white: true */
"use strict";

module.exports = function(eveApiGroup) {
	eveApiGroup.addroute('/units', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.unitMask.getFields(req.query.fields)
		};

		db.eve.getAllUnits(queryParams, responseFn);
	});

	eveApiGroup.addroute('/units/:unitID', function(req, db, apiMasks, responseFn) {
		var queryParams = {
			fields: apiMasks.unitMask.getFields(req.query.fields),
			unitID: req.params.unitID
		};

		db.eve.getUnitByID(queryParams, responseFn);
	});
};
