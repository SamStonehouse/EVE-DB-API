/*jslint node: true, vars: true, white: true */
"use strict";

module.exports = function(setupQuery) {

	var getAllAttributeTypes = setupQuery("SELECT ?? FROM dgmAttributeTypes", ['fields']);

	var getAttributeTypeByID = setupQuery("SELECT ?? FROM dgmAttributeTypes WHERE attributeID = ?", ['fields', 'attributeID']);

	var getTypeAttributesByTypeID = setupQuery("SELECT attributeID, COALESCE(valueInt,valueFloat) AS value FROM dgmTypeAttributes WHERE typeID = ?", [		'typeID']);

	var getAllAttributeCategories = setupQuery("SELECT ?? FROM dgmAttributeCategories", ['fields']);

	var getAttributeCategoryByID = setupQuery("SELECT ?? FROM dgmAttributeCategories WHERE categoryID = ?", ['fields', 'categoryID']);

	return {
		getAllAttributeTypes: getAllAttributeTypes,
		getAttributeTypeByID: getAttributeTypeByID,
		getTypeAttributesByTypeID:getTypeAttributesByTypeID,
		getAllAttributeCategories: getAllAttributeCategories,
		getAttributeCategoryByID: getAttributeCategoryByID
	};
};