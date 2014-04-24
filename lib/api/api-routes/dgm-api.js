/*jslint node: true, vars: true, white: true */
"use strict";

module.exports = function(dgmApiGroup) {
	dgmApiGroup.addroute('/attributetypes', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.attributeTypeMask.getFields(req.query.fields)
		};

		db.dgm.getAllAttributeTypes(queryParams, responseFn);
	});

	dgmApiGroup.addroute('/attributetypes/:attributeID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			attributeID: req.params.attributeID,
			fields: apiMasks.attributeTypeMask.getFields(req.query.fields)
		};

		db.dgm.getAttributeTypeByID(queryParams, responseFn);
	});

	dgmApiGroup.addroute('/attributecategories', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.attributeCategoryMask.getFields(req.query.fields)
		};

		db.dgm.getAllAttributeCategories(queryParams, responseFn);
	});

	dgmApiGroup.addroute('/attributecategories/:categoryID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			categoryID: req.params.categoryID,
			fields: apiMasks.attributeCategoryMask.getFields(req.query.fields)
		};

		db.dgm.getAttributeCategoryByID(queryParams, responseFn);
	});
};
