/*jslint node: true, vars: true, white: true */
"use strict";

var connection;

var getAllAttributeTypes = function(properties, fn) {
	var query = "SELECT ?? FROM dgmAttributeTypes";
	connection.query(query, [properties.fields], fn);
};

var getAttributeTypeByID = function(properties, fn) {
	var query = "SELECT ?? FROM dgmAttributeTypes WHERE attributeID = ?";
	connection.query(query, [properties.fields, properties.attributeID], fn);
};

var getAllAttributeCategories = function(properties, fn) {
	var query = "SELECT ?? FROM dgmAttributeCategories";
	connection.query(query, [properties.fields], fn);
};

var getAttributeCategoryByID = function(properties, fn) {
	var query = "SELECT ?? FROM dgmAttributeCategories WHERE categoryID = ?";
	connection.query(query, [properties.fields, properties.categoryID], fn);
};

module.exports = function(_connection) {
	connection = _connection;

	return {
		getAllAttributeTypes: getAllAttributeTypes,
		getAttributeTypeByID: getAttributeTypeByID,
		getAllAttributeCategories: getAllAttributeCategories,
		getAttributeCategoryByID: getAttributeCategoryByID
	};
};