/*jslint node: true, vars: true, white: true */
"use strict";

var mysql      = require('mysql');

//TODO: Export values to external config
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root', //Amazing username & pw
  password : '',
  database : 'evedb'
});

connection.connect(function(err) {
	if (err) {
		console.log("MySQL Connection Error: " . err);
		process.exit(1);
	} else {
		console.log("Connected to MySQL database");
	}
});

var getAllGroups = function(properties, fn) {
	var queryString = "SELECT ?? FROM invGroups WHERE published = 1";
	connection.query(queryString, [properties.fields], fn);
};

var getGroupByID = function(properties, fn) {
	var query = "SELECT ?? FROM invGroups WHERE published = 1 AND groupID = ?";
	connection.query(query, [properties.fields, properties.groupID], fn);
};

var getGroupsInCategory = function(properties, fn) {
	var query = "SELECT ?? FROM invGroups WHERE published = 1 AND categoryID = ?";
	connection.query(query, [properties.fields, properties.categoryID], fn);
};

var getAllCategories = function(properties, fn) {
	var query = "SELECT ?? FROM invCategories WHERE published = 1";
	connection.query(query, [properties.fields], fn);
};

var getCategoryByID = function(properties, fn) {
	var query = "SELECT ?? FROM invCategories WHERE published = 1 AND categoryID = ?";
	connection.query(query, [properties.fields, properties.categoryID], fn);
};

var getAllMarketGroups = function(properties, fn) {
	var query = "SELECT ?? FROM invMarketGroups";
	connection.query(query, [properties.fields], fn);
};

var getMarketGroupByID = function(properties, fn) {
	var query = "SELECT ?? FROM invMarketGroups WHERE marketGroupID = ?";
	connection.query(query, [properties.fields, properties.marketGroupID], fn);
};

var getMarketGroupsByParentID = function(properties, fn) {
	var query = "SELECT ?? FROM invMarketGroups WHERE parentGroupID = ?";
	connection.query(query, [properties.fields, properties.marketGroupID], fn);
};

var getParentMarketGroups = function(properties, fn) {
	var query = "SELECT ?? FROM invMarketGroups WHERE parentGroupID IS NULL";
	connection.query(query, [properties.fields], fn);
};

var getAllTypes = function(properties, fn) {
	var query = "SELECT ?? FROM invTypes WHERE published = 1";
	connection.query(query, fn);
};

var getTypeByID = function(properties, fn) {
	var query = "SELECT ?? FROM invTypes WHERE published = 1 AND typeID = ?";
	connection.query(query, [properties.fields, properties.typeID], fn);
};

var getTypesInGroup = function(properties, fn) {
	var query = "SELECT ?? FROM invTypes WHERE published = 1 AND groupID = ?";
	connection.query(query, [properties.fields, properties.groupID], fn);
};

var getAllBloodlines = function(properties, fn) {
	var query = "SELECT ?? FROM chrBloodlines";
	connection.query(query, [properties.fields], fn);
};

var getAllFactions = function(properties, fn) {
	var query = "SELECT ?? FROM chrFactions";
	connection.query(query, [properties.fields], fn);
};

var getAllRaces = function(properties, fn) {
	var query = "SELECT ?? FROM chrRaces";
	connection.query(query, [properties.fields], fn);
};

var getAllAncestries = function(properties, fn) {
	var query = "SELECT ?? FROM chrAncestries";
	connection.query(query, [properties.fields], fn);
};

var getAllSolarSystems = function(properties, fn) {
	var query = "SELECT ?? FROM mapSolarSystems";
	connection.query(query, [properties.fields], fn);
};

var getSolarSystemByID = function(properties, fn) {
	var query = "SELECT ?? FROM mapSolarSystems WHERE solarSystemID = ?";
	var q = connection.query(query, [properties.fields, properties.solarSystemID], fn);
	console.log(q.sql);
};

var getSolarSystemsInRegion = function(properties, fn) {
	var query = "SELECT ?? FROM mapSolarSystems WHERE regionID = ?";
	connection.query(query, [properties.fields, properties.regionID], fn);
};

var getAllRegions = function(properties, fn) {
	var query = "SELECT ?? FROM mapRegions";
	connection.query(query, [properties.fields], fn);
};

var getRegionByID = function(properties, fn) {
	var query = "SELECT ?? FROM mapRegions where regionID = ?";
	connection.query(query, [properties.fields, properties.regionID], fn);
};

module.exports = {
	getAllGroups: getAllGroups,
	getGroupsInCategory: getGroupsInCategory,
	getGroupByID: getGroupByID,
	getAllCategories: getAllCategories,
	getCategoryByID: getCategoryByID,
	getAllMarketGroups: getAllMarketGroups,
	getMarketGroupByID: getMarketGroupByID,
	getMarketGroupsByParentID: getMarketGroupsByParentID,
	getParentMarketGroups: getParentMarketGroups,
	getAllTypes: getAllTypes,
	getTypeByID: getTypeByID,
	getTypesInGroup: getTypesInGroup,
	getAllBloodlines: getAllBloodlines,
	getAllFactions: getAllFactions,
	getAllRaces: getAllRaces,
	getAllAncestries: getAllAncestries,
	getAllSolarSystems: getAllSolarSystems,
	getSolarSystemByID: getSolarSystemByID,
	getSolarSystemsInRegion: getSolarSystemsInRegion,
	getAllRegions: getAllRegions,
	getRegionByID: getRegionByID
};
