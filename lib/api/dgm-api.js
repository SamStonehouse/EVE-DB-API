/*jslint node: true, vars: true, white: true */
"use strict";

//Module requirements
var apiMasks = require('./api-masks.js');

//Module imports
var db;

var setupRoutes = function(app, next) {

	app.get('/attributetypes', function(req, res) {
		db.getAllAttributeTypes(
			{
				fields: apiMasks.attributeTypeMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/attributetypes/:attributeID', function(req, res) {
		db.getAttributeTypeByID(
			{
				attributeID: req.params.attributeID,
				fields: apiMasks.attributeTypeMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/attributecategories', function(req, res) {
		db.getAllAttributeCategories(
			{
				fields: apiMasks.attributeCategoryMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/attributecategories/:categoryID', function(req, res) {
		db.getAttributeCategoryByID(
			{
				categoryID: req.params.categoryID,
				fields: apiMasks.attributeCategoryMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});
};



module.exports = function(_db) {
	db = _db;
	
	return {
		setupRoutes: setupRoutes
	};
};
