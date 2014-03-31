/*jslint node: true, vars: true, white: true */
"use strict";

var connection;

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
	connection.query(query, [properties.fields, properties.parentID], fn);
};

var getParentMarketGroups = function(properties, fn) {
	var query = "SELECT ?? FROM invMarketGroups WHERE parentGroupID IS NULL";
	connection.query(query, [properties.fields], fn);
};

var getAllTypes = function(properties, fn) {
	var query = "SELECT ?? FROM invTypes WHERE published = 1";
	connection.query(query,[properties.fields], fn);
};

var getTypeByID = function(properties, fn) {
	var query = "SELECT ?? FROM invTypes WHERE published = 1 AND typeID = ?";
	connection.query(query, [properties.fields, properties.typeID], fn);
};

var getTypesInGroup = function(properties, fn) {
	var query = "SELECT ?? FROM invTypes WHERE published = 1 AND groupID = ?";
	connection.query(query, [properties.fields, properties.groupID], fn);
};


module.exports = function(_connection) {
	connection = _connection;

	return {
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
		getTypesInGroup: getTypesInGroup
	};
};