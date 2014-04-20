/*jslint node: true, vars: true, white: true */
"use strict";

//Module requirements
var apiMasks = require('./api-masks.js');

//Module imports
var db;

var setupRoutes = function(app) {

	app.get('/types', function(req, res) {
		var queryParams = {
			fields: apiMasks.typeMask.getFields(req.query.fields)
		};

		db.getAllTypes(queryParams, res.locals.apiResponse);
	});

	app.get('/types/:typeID', function(req, res) {

		var queryParams = {
			typeID: req.params.typeID,
			fields: apiMasks.typeMask.getFields(req.query.fields)
		};

		db.getTypeByID(queryParams, res.locals.apiResponse);
	});

	app.get('/types/group/:groupID', function(req, res) {

		var queryParams = {
			groupID: req.params.groupID,
			fields: apiMasks.typeMask.getFields(req.query.fields)
		};

		db.getTypesInGroup(queryParams, res.locals.apiResponse);
	});

	app.get('/types/autocomplete/:autocompletePhrase', function(req, res) {

		var queryParams = {
			phrase: "%" + req.params.autocompletePhrase + "%",
			fields: apiMasks.typeMask.getFields(req.query.fields)
		};


		db.getTypeAutocomplete(queryParams, res.locals.apiResponse);
	});

	app.get('/categories', function(req, res) {

		var queryParams = {
			fields: apiMasks.categoryMask.getFields(req.query.fields)
		};

		db.getAllCategories(queryParams, res.locals.apiResponse);
	});

	app.get('/categories/:categoryID', function(req, res) {

		var queryParams = {
			categoryID: req.params.categoryID,
			fields: apiMasks.categoryMask.getFields(req.query.fields)
		};

		db.getCategoryByID(queryParams, res.locals.apiResponse);
	});

	app.get('/groups', function(req, res) {

		var queryParams = {
			fields: apiMasks.groupMask.getFields(req.query.fields)
		};

		db.getAllGroups(queryParams, res.locals.apiResponse);
	});

	app.get('/groups/:groupID', function(req, res) {

		var queryParams = {
			groupID: req.params.groupID,
			fields: apiMasks.groupMask.getFields(req.query.fields)
		};

		db.getGroupByID(queryParams, res.locals.apiResponse);
	});

	app.get('/groups/category/:categoryID', function(req, res) {

		var queryParams = {
			categoryID: req.params.categoryID,
			fields: apiMasks.groupMask.getFields(req.query.fields)
		};

		db.getGroupsInCategory(queryParams, res.locals.apiResponse);
	});

	app.get('/marketgroups', function(req, res) {

		var queryParams = {
			fields: apiMasks.marketGroupMask.getFields(req.query.fields)
		};

		db.getAllMarketGroups(queryParams, res.locals.apiResponse);
	});

	app.get('/marketgroups/:marketGroupID', function(req, res) {

		var queryParams = {
			marketGroupID: req.params.marketGroupID,
			fields: apiMasks.marketGroupMask.getFields(req.query.fields)
		};

		db.getMarketGroupByID(queryParams, res.locals.apiResponse);
	});

	app.get('/marketgroups/parent/null', function(req, res) {

		var queryParams = {
			fields: apiMasks.marketGroupMask.getFields(req.query.fields)
		};

		db.getParentMarketGroups(queryParams, res.locals.apiResponse);
	});

	app.get('/marketgroups/parent/:parentID', function(req, res) {

		var queryParams = {
			parentID: req.params.parentID,
			fields: apiMasks.marketGroupMask.getFields(req.query.fields)
		};

		db.getMarketGroupsByParentID(queryParams, res.locals.apiResponse);
	});

	app.get('/blueprinttypes', function(req, res) {

		var queryParams = {
			fields: apiMasks.blueprintTypeMask.getfields(req.query.fields)
		};

		db.getAllBlueprintTypes(queryParams, res.locals.apiResponse);
	});

	app.get('/blueprinttypes/parent/:blueprintTypeParentID', function(req, res) {

		var queryParams = {
			blueprintTypeParentID: req.params.blueprintTypeParentID,
			fields: apiMasks.blueprintTypeMask.getFields(req.query.fields)
		};
		
		db.getBlueprintTypeByParentID(queryParams, res.locals.apiResponse);
	});

	app.get('/blueprinttypes/product/:blueprintTypeProductID', function(req, res) {

		var queryParams = {
			blueprintTypeProductID: req.params.blueprintTypeProductID,
			fields: apiMasks.blueprintTypeMask.getFields(req.query.fields)
		};

		db.getBlueprintTypeByProductID(queryParams, res.locals.apiResponse);
	});

	app.get('/blueprinttypes/:blueprintTypeID', function(req, res) {

		var queryParams = {
			blueprintTypeID: req.params.blueprintTypeID,
			fields: apiMasks.blueprintTypeMask.getfields(req.query.fields)
		};

		db.getBlueprintTypeByID(queryParams, res.locals.apiResponse);
	});
};


module.exports = function(_db) {
	db = _db;

	return {
		setupRoutes: setupRoutes
	};
};
