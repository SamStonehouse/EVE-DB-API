/*jslint node: true, vars: true, white: true */
"use strict";

var Mask = require('./../mask/mask.js');

var maskInterpreter;
var db;

var categoryMask = new Mask([
	"categoryID",
	"categoryName",
	"description"
	]);

var typeMask = new Mask([
	"typeID",
	"groupID",
	"typeName",
	"description",
	"mass",
	"volume",
	"capacity",
	"portionSize",
	"raceID",
	"basePrice",
	"published",
	"marketGroupID",
	"chanceOfDuplicating"
	]);

var groupMask = new Mask([
	"groupID",
	"categoryID",
	"groupName",
	"description",
	"iconID",
	"useBasePrice",
	"allowManufacture",
	"allowRecycler",
	"anchored",
	"anchorable",
	"fittableNonSingleton",
	"published"
	]);

var marketGroupMask = new Mask([
	"marketGroupID",
	"parentGroupID",
	"marketGroupName",
	"description",
	"iconID",
	"hasTypes"
	]);

var blueprintTypeMask = new Mask([
	"blueprintTypeID",
	"parentBlueprintTypeID",
	"productTypeID",
	"productionTime",
	"techLevel",
	"researchProductivityTime",
	"researchMaterialTime",
	"researchCopyTime",
	"researchTechTime",
	"productivityModifier",
	"materialModifier",
	"wasteFactor",
	"maxProductionLimit"
	]);


var setupRoutes = function(app, next) {
	app.get('/types', function(req, res) {
		db.getAllTypes(
			{
				fields: maskInterpreter(req.query.fields, typeMask)
			},
			next(req, res)
		);
	});

	app.get('/types/:typeID', function(req, res) {
		db.getTypeByID(
			{
				typeID: req.params.typeID,
				fields: maskInterpreter(req.query.fields, typeMask)
			},
			next(req, res)
		);
	});

	app.get('/types/group/:groupID', function(req, res) {
		db.getTypesInGroup(
			{
				groupID: req.params.groupID,
				fields: maskInterpreter(req.query.fields, typeMask)
			},
			next(req,res)
		);
	});

	app.get('/types/autocomplete/:autocompletePhrase', function(req, res) {
		db.getTypeAutocomplete(
		{
			phrase: "%" + req.params.autocompletePhrase + "%",
			fields: maskInterpreter(req.query.fields, typeMask)
		},
		next(req, res)
		);
	});

	app.get('/categories', function(req, res) {
		db.getAllCategories(
			{
				fields: maskInterpreter(req.query.fields, categoryMask)
			},
			next(req, res)
		);
	});

	app.get('/categories/:categoryID', function(req, res) {
		db.getCategoryByID(
			{
				categoryID: req.params.categoryID,
				fields: maskInterpreter(req.query.fields, categoryMask)
			},
			next(req, res)
		);
	});

	app.get('/groups', function(req, res) {
		db.getAllGroups(
			{
				fields: maskInterpreter(req.query.fields, groupMask)
			},
			next(req, res)
		);
	});

	app.get('/groups/:groupID', function(req, res) {
		db.getGroupByID(
			{
				groupID: req.params.groupID,
				fields: maskInterpreter(req.query.fields, groupMask)
			},
			next(req, res)
		);
	});

	app.get('/groups/category/:categoryID', function(req, res) {
		db.getGroupsInCategory(
			{
				categoryID: req.params.categoryID,
				fields: maskInterpreter(req.query.fields, groupMask)
			},
			next(req, res)
		);
	});

	app.get('/marketgroups', function(req, res) {
		db.getAllMarketGroups(
			{
				fields: maskInterpreter(req.query.fields, marketGroupMask)
			},
			next(req, res)
		);
	});

	app.get('/marketgroups/:marketGroupID', function(req, res) {
		db.getMarketGroupByID(
			{
				marketGroupID: req.params.marketGroupID,
				fields: maskInterpreter(req.query.fields, marketGroupMask)
			},
			next(req, res)
		);
	});

	app.get('/marketgroups/parent/null', function(req, res) {
		db.getParentMarketGroups(
			{
				fields: maskInterpreter(req.query.fields, marketGroupMask)
			},
			next(req, res)
		);
	});

	app.get('/marketgroups/parent/:parentID', function(req, res) {
		db.getMarketGroupsByParentID(
			{
				parentID: req.params.parentID,
				fields: maskInterpreter(req.query.fields, marketGroupMask)
			},
			next(req, res)
		);
	});

	app.get('/blueprinttypes', function(req, res) {
		db.getAllBlueprintTypes(
			{
				fields: maskInterpreter(req.query.fields, blueprintTypeMask)
			},
			next(req, res)
		);
	});

	app.get('/blueprinttypes/parent/:blueprintTypeParentID', function(req, res) {
			db.getBlueprintTypeByParentID(
			{
				blueprintTypeParentID: req.params.blueprintTypeParentID,
				fields: maskInterpreter(req.query.fields, blueprintTypeMask)
			},
			next(req, res)
		);
	});

	app.get('/blueprinttypes/product/:blueprintTypeProductID', function(req, res) {
			db.getBlueprintTypeByProductID(
			{
				blueprintTypeProductID: req.params.blueprintTypeProductID,
				fields: maskInterpreter(req.query.fields, blueprintTypeMask)
			},
			next(req, res)
		);
	});

	app.get('/blueprinttypes/:blueprintTypeID', function(req, res) {
		db.getBlueprintTypeByID(
			{
				blueprintTypeID: req.params.blueprintTypeID,
				fields: maskInterpreter(req.query.fields, blueprintTypeMask)
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
