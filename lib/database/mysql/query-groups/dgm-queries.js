/*jslint node: true, vars: true, white: true */
"use strict";

module.exports = function(setupQuery) {

	var queries = {};

	queries.getAllAttributeTypes = setupQuery("SELECT ?? FROM dgmAttributeTypes", ['fields']);

	queries.getAttributeTypeByID = setupQuery("SELECT ?? FROM dgmAttributeTypes WHERE attributeID = ?", ['fields', 'attributeID']);

	queries.getTypeAttributesByTypeID = setupQuery("SELECT dgmTypeAttributes.attributeID, dgmAttributeTypes.attributeName, COALESCE(valueInt,valueFloat) AS value FROM dgmTypeAttributes LEFT JOIN dgmAttributeTypes ON dgmAttributeTypes.attributeID = dgmTypeAttributes.attributeID WHERE typeID = ?", ['typeID']);

	queries.getAllAttributeCategories = setupQuery("SELECT ?? FROM dgmAttributeCategories", ['fields']);

	queries.getAttributeCategoryByID = setupQuery("SELECT ?? FROM dgmAttributeCategories WHERE categoryID = ?", ['fields', 'categoryID']);

	return queries;
};