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
var chr = require('./chr-queries.js')(connection);
var map = require('./map-queries.js')(connection);
var dgm = require('./dgm-queries.js')(connection);

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
	getAllBlueprintTypes:      inv.getAllBlueprintTypes,
	getBlueprintTypeByID:      inv.getBlueprintTypeByID,
	getBlueprintTypeByParentID:inv.getBlueprintTypeByParentID,
	getBlueprintTypeByProductID: inv.getBlueprintTypeByProductID,

	getAllBloodlines:          chr.getAllBloodlines,
	getAllFactions:            chr.getAllFactions,
	getAllRaces:               chr.getAllRaces,
	getAllAncestries:          chr.getAllAncestries,

	getAllSolarSystems:        map.getAllSolarSystems,
	getSolarSystemByID:        map.getSolarSystemByID,
	getSolarSystemsInRegion:   map.getSolarSystemsInRegion,
	getAllRegions:             map.getAllRegions,
	getRegionByID:             map.getRegionByID,

	getAllAttributeTypes:      dgm.getAllAttributeTypes,
	getAttributeTypeByID:      dgm.getAttributeTypeByID,
	getAllAttributeCategories: dgm.getAllAttributeCategories,
	getAttributeCategoryByID:  dgm.getAttributeCategoryByID
};
