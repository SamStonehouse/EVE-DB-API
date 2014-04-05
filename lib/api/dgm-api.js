/*jslint node: true, vars: true, white: true */
"use strict";

var Mask = require('./../mask/mask.js');

var next;
var maskInterpreter;
var db;

var attributeTypeMask = new Mask([
	"attributeID",
	"attributeName",
	"description",
	"iconID",
	"defaultValue",
	"published",
	"displayName",
	"unitID",
	"stackable",
	"highIsGood",
	"categoryID"
	]);

var attributeCategoryMask = new Mask([
	"categoryID",
	"categoryName",
	"categoryDescription"
	]);

var setupRoutes = function(app, next) {

	app.get('/attributetypes', function(req, res) {
		db.getAllAttributeTypes(
			{
				fields: maskInterpreter(req.query.fields, attributeTypeMask)
			},
			next(req, res)
		);
	});

	app.get('/attributetypes/:attributeID', function(req, res) {
		db.getAttributeTypeByID(
			{
				attributeID: req.params.attributeID,
				fields: maskInterpreter(req.query.fields, attributeTypeMask)
			},
			next(req, res)
		);
	});

	app.get('/attributecategories', function(req, res) {
		db.getAllAttributeCategories(
			{
				fields: maskInterpreter(req.query.fields, attributeCategoryMask)
			},
			next(req, res)
		);
	});

	app.get('/attributecategories/:categoryID', function(req, res) {
		db.getAttributeCategoryByID(
			{
				categoryID: req.params.categoryID,
				fields: maskInterpreter(req.query.fields, attributeCategoryMask)
			},
			next(req, res)
		);
	});
};



module.exports = function(_db, _maskInterpreter) {
	db = _db;
	maskInterpreter = _maskInterpreter;
	
	return {
		setupRoutes: setupRoutes
	};
};
