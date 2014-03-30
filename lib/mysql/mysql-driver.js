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

var inv = require('./inv-queries.js')(connection);


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
	getAllGroups:              inv.getAllGroups,
	getGroupsInCategory:       inv.getGroupsInCategory,
	getGroupByID:              inv.getGroupByID,
	getAllCategories:          inv.getAllCategories,
	getCategoryByID:           inv.getCategoryByID,
	getAllMarketGroups:        inv.getAllMarketGroups,
	getMarketGroupByID:        inv.getMarketGroupByID,
	getMarketGroupsByParentID: inv.getMarketGroupsByParentID,
	getParentMarketGroups:     inv.getParentMarketGroups,
	getAllTypes:               inv.getAllTypes,
	getTypeByID:               inv.getTypeByID,
	getTypesInGroup:           inv.getTypesInGroup,
	getAllFactions: getAllFactions,
	getAllRaces: getAllRaces,
	getAllAncestries: getAllAncestries,
	getAllSolarSystems: getAllSolarSystems,
	getSolarSystemByID: getSolarSystemByID,
	getSolarSystemsInRegion: getSolarSystemsInRegion,
	getAllRegions: getAllRegions,
	getRegionByID: getRegionByID
};
