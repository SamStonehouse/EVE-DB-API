/*jslint node: true, vars: true, white: true */
"use strict";

var Mask = require('./mask/mask.js');

var db;

var apiResponse = function(req, res) {
	return function(err, results) {
		res.set('Content-Type', 'application/json');

		if (err) {
			res.status(500).send({ error: true, message: 'Internal Server Error: ' + err });
		} else {
			if (results.length === 0) {
				res.status(404).send({ error: true, message: '404 Not Found'});
			} else {
				res.send({results: results});
			}
		}
	};
};

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

var bloodlineMask = new Mask([
	"bloodlineID",
	"bloodlineName",
	"raceID",
	"description",
	"maleDescription",
	"femaleDescription",
	"shipTypeID",
	"corporationID",
	"perception",
	"willpower",
	"charisma",
	"memory",
	"intelligence",
	"iconID",
	"shortDescription",
	"shortMaleDescription",
	"shortFemaleDescription"
	]);

var factionMask = new Mask([
	"factionID",
	"factionName",
	"description",
	"raceIDs",
	"solarSystemID",
	"corporationID",
	"sizeFactor",
	"stationCount",
	"stationSystemCount",
	"militiaCorporationID",
	"iconID"
	]);

var getFields = function(providedMask, fieldMask) {
	var fields = fieldMask.checkMask(providedMask);

	if (fields === undefined) {
		return fieldMask.getAllValues();
	}

	if (typeof fields === "string") {
		return [fields];
	}

	if ((Object.prototype.toString.call(fields) === '[object Array]') && (fields.length > 0)) {
		return fields;
	}

	return fieldMask.getAllValues();
};

var setupRoutes = function(app) {
	app.get('/categories', function(req, res) {
		db.getAllCategories(
			{
				fields: getFields(req.query.fields, categoryMask)
			},
			apiResponse(req, res)
		);
	});

	app.get('/categories/:categoryID', function(req, res) {
		db.getCategoryByID(
			{
				categoryID: req.params.categoryID,
				fields: getFields(req.query.fields, categoryMask)
			},
			apiResponse(req, res)
		);
	});

	app.get('/groups', function(req, res) {
		db.getAllGroups(
			{
				fields: getFields(req.query.fields, groupMask)
			},
			apiResponse(req, res)
		);
	});

	app.get('/groups/:groupID', function(req, res) {
		db.getGroupByID(
			{
				groupID: req.params.groupID,
				fields: getFields(req.query.fields, groupMask)
			},
			apiResponse(req, res)
		);
	});

	app.get('types', function(req, res) {
		db.getAllTypes(
			{
				fields: getFields(req.query.fields, typeMask)
			},
			apiResponse(req, res)
		);
	});

	app.get('/types/:typeID', function(req, res) {
		db.getTypeByID(
			{
				typeID: req.params.typeID,
				fields: getFields(req.query.fields, typeMask)
			},
			apiResponse(req, res)
		);
	});

	app.get('/marketgroups', function(req, res) {
		db.getAllMarketGroups(
			{
				fields: getFields(req.query.fields, marketGroupMask)
			},
			apiResponse(req, res)
		);
	});

	app.get('/marketgroups/:marketGroupID', function(req, res) {
		db.getMarketGroupByID(
			{
				marketGroupID: req.params.marketGroupID,
				fields: getFields(req.query.fields, marketGroupMask)
			},
			apiResponse(req, res)
		);
	});

	app.get('/bloodlines', function(req, res) {
		db.getAllBloodlines(
			{
				fields: getFields(req.query.fields, bloodlineMask)
			},
			apiResponse(req, res)
		);
	});

	app.get('/factions', function(req, res) {
		db.getAllFactions(
			{
				fields: getFields(req.query.fields, factionMask)
			},
			apiResponse(req, res)
		);
	});
};


module.exports = function(_db) {
	db = _db;
	return {
		setupRoutes: setupRoutes
	};
};
