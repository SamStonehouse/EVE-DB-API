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

var raceMask = new Mask([
	"raceID",
	"raceName",
	"description",
	"iconID",
	"shortDescription"
	]);

var ancestryMask = new Mask([
	"ancestryID",
	"ancestryName",
	"bloodlineID",
	"description",
	"perception",
	"willpower",
	"charisma",
	"memory",
	"intelligence",
	"iconID",
	"shortDescription"
	]);

var solarSystemMask = new Mask([
	"regionID",
	"constellationID",
	"solarSystemID",
	"solarSystemName",
	"x",
	"y",
	"z",
	"xMin",
	"xMax",
	"yMin",
	"yMax",
	"zMin",
	"zMax",
	"luminosity",
	"border",
	"fringe",
	"corridor",
	"hub",
	"international",
	"regional",
	"constellation",
	"security",
	"factionID",
	"radius",
	"sunTypeID",
	"securityClass"
	]);

var regionMask = new Mask([
	"regionID",
	"regionName",
	"x",
	"y",
	"z",
	"xMin",
	"xMax",
	"yMin",
	"yMax",
	"zMin",
	"zMax",
	"factionID",
	"radius"
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

	app.get('/groups/category/:categoryID', function(req, res) {
		db.getGroupsInCategory(
			{
				categoryID: req.params.categoryID,
				fields: getFields(req.query.fields, groupMask)
			},
			apiResponse(req, res)
		);
	});

	app.get('/types', function(req, res) {
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

	app.get('/types/group/:groupID', function(req, res) {
		db.getTypesInGroup(
			{
				groupID: req.params.groupID,
				fields: getFields(req.query.fields, typeMask)
			},
			apiResponse(req,res)
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

	app.get('/marketgroups/parent/null', function(req, res) {
		console.log("NULL");
		db.getParentMarketGroups(
			{
				fields: getFields(req.query.fields, marketGroupMask)
			},
			apiResponse(req, res)
		);
	});

	app.get('/marketgroups/parent/:parentID', function(req, res) {

		db.getMarketGroupsByParentID(
			{
				parentID: req.params.parentID,
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

	app.get('/races', function(req, res) {
		db.getAllRaces(
			{
				fields: getFields(req.query.fields, raceMask)
			},
			apiResponse(req, res)
		);
	});

	app.get('/ancestries', function(req, res) {
		db.getAllAncestries(
			{
				fields: getFields(req.query.fields, ancestryMask)
			},
			apiResponse(req, res)
		);
	});

	app.get('/solarsystems', function(req, res) {
		db.getAllSolarSystems(
			{
				fields: getFields(req.query.fields, solarSystemMask)
			},
			apiResponse(req, res)
		);
	});

	app.get('/solarsystems/:solarSystemID', function(req,res) {
		db.getSolarSystemByID(
			{
				solarSystemID: req.params.solarSystemID,
				fields: getFields(req.query.fields, solarSystemMask)
			},
			apiResponse(req, res)
		);
	});

	app.get('/solarsystems/region/:regionID', function(req, res) {
		db.getSolarSystemsInRegion(
			{
				regionID: req.params.regionID,
				fields: getFields(req.query.fields, solarSystemMask)
			},
			apiResponse(req, res)
		);
	});

	app.get('/regions', function(req, res) {
		db.getAllRegions(
			{
				fields: getFields(req.query.fields, regionMask)
			},
			apiResponse(req, res)
		);
	});

	app.get('/regions/:regionID', function(req, res) {
		db.getRegionByID(
			{
				regionID: req.params.regionID,
				fields: getFields(req.query.fields, regionMask)
			},
			apiResponse(req, res)
		);
	});

	app.get('/blueprinttypes', function(req, res) {
		db.getAllBlueprintTypes(
			{
				fields: getFields(req.query.fields, blueprintTypeMask)
			},
			apiResponse(req, res)
		);
	});

	app.get('/blueprinttypes/parent/:blueprintTypeParentID', function(req, res) {
			db.getBlueprintTypeByParentID(
			{
				blueprintTypeParentID: req.params.blueprintTypeParentID,
				fields: getFields(req.query.fields, blueprintTypeMask)
			},
			apiResponse(req, res)
		);
	});

	app.get('/blueprinttypes/product/:blueprintTypeProductID', function(req, res) {
			db.getBlueprintTypeByProductID(
			{
				blueprintTypeProductID: req.params.blueprintTypeProductID,
				fields: getFields(req.query.fields, blueprintTypeMask)
			},
			apiResponse(req, res)
		);
	});

	app.get('/blueprinttypes/:blueprintTypeID', function(req, res) {
		db.getBlueprintTypeByID(
			{
				blueprintTypeID: req.params.blueprintTypeID,
				fields: getFields(req.query.fields, blueprintTypeMask)
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
