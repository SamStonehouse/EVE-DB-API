/*jslint node: true, vars: true, white: true */
"use strict";

//Module requirements
var apiMasks = require('./api-masks.js');

//Module imports
var db;

var setupRoutes = function(app) {

	app.get('/attributetypes', function(req, res) {

		var queryParams = {
			fields: apiMasks.attributeTypeMask.getFields(req.query.fields)
		};

		db.getAllAttributeTypes(queryParams, res.locals.apiResponse);
	});

	app.get('/attributetypes/:attributeID', function(req, res) {

		var queryParams = {
			attributeID: req.params.attributeID,
			fields: apiMasks.attributeTypeMask.getFields(req.query.fields)
		};

		db.getAttributeTypeByID(queryParams, res.locals.apiResponse);
	});

	app.get('/attributecategories', function(req, res) {

		var queryParams = {
			fields: apiMasks.attributeCategoryMask.getFields(req.query.fields)
		};

		db.getAllAttributeCategories(queryParams, res.locals.apiResponse);
	});

	app.get('/attributecategories/:categoryID', function(req, res) {

		var queryParams = {
			categoryID: req.params.categoryID,
			fields: apiMasks.attributeCategoryMask.getFields(req.query.fields)
		};

		db.getAttributeCategoryByID(queryParams, res.locals.apiResponse);
	});
};



module.exports = function(_db) {
	db = _db;
	
	return {
		setupRoutes: setupRoutes
	};
};
