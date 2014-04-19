/*jslint node: true, vars: true, white: true */
"use strict";

//Module requirements
var apiMasks = require('./api-masks.js');

//Module imports
var db;


var setupRoutes = function(app, next) {
	app.get('/types', function(req, res) {
		db.getAllTypes(
			{
				fields: apiMasks.typeMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/types/:typeID', function(req, res) {
		db.getTypeByID(
			{
				typeID: req.params.typeID,
				fields: apiMasks.typeMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/types/group/:groupID', function(req, res) {
		db.getTypesInGroup(
			{
				groupID: req.params.groupID,
				fields: apiMasks.typeMask.getFields(req.query.fields)
			},
			next(req,res)
		);
	});

	app.get('/types/autocomplete/:autocompletePhrase', function(req, res) {
		db.getTypeAutocomplete(
		{
			phrase: "%" + req.params.autocompletePhrase + "%",
			fields: apiMasks.typeMask.getFields(req.query.fields)
		},
		next(req, res)
		);
	});

	app.get('/categories', function(req, res) {
		db.getAllCategories(
			{
				fields: apiMasks.categoryMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/categories/:categoryID', function(req, res) {
		db.getCategoryByID(
			{
				categoryID: req.params.categoryID,
				fields: apiMasks.categoryMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/groups', function(req, res) {
		db.getAllGroups(
			{
				fields: apiMasks.groupMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/groups/:groupID', function(req, res) {
		db.getGroupByID(
			{
				groupID: req.params.groupID,
				fields: apiMasks.groupMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/groups/category/:categoryID', function(req, res) {
		db.getGroupsInCategory(
			{
				categoryID: req.params.categoryID,
				fields: apiMasks.groupMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/marketgroups', function(req, res) {
		db.getAllMarketGroups(
			{
				fields: apiMasks.marketGroupMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/marketgroups/:marketGroupID', function(req, res) {
		db.getMarketGroupByID(
			{
				marketGroupID: req.params.marketGroupID,
				fields: apiMasks.marketGroupMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/marketgroups/parent/null', function(req, res) {
		db.getParentMarketGroups(
			{
				fields: apiMasks.marketGroupMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/marketgroups/parent/:parentID', function(req, res) {
		db.getMarketGroupsByParentID(
			{
				parentID: req.params.parentID,
				fields: apiMasks.marketGroupMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/blueprinttypes', function(req, res) {
		db.getAllBlueprintTypes(
			{
				fields: apiMasks.blueprintTypeMask.getfields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/blueprinttypes/parent/:blueprintTypeParentID', function(req, res) {
			db.getBlueprintTypeByParentID(
			{
				blueprintTypeParentID: req.params.blueprintTypeParentID,
				fields: apiMasks.blueprintTypeMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/blueprinttypes/product/:blueprintTypeProductID', function(req, res) {
			db.getBlueprintTypeByProductID(
			{
				blueprintTypeProductID: req.params.blueprintTypeProductID,
				fields: apiMasks.blueprintTypeMask.getFields(req.query.fields)
			},
			next(req, res)
		);
	});

	app.get('/blueprinttypes/:blueprintTypeID', function(req, res) {
		db.getBlueprintTypeByID(
			{
				blueprintTypeID: req.params.blueprintTypeID,
				fields: apiMasks.blueprintTypeMask.getfields(req.query.fields)
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
