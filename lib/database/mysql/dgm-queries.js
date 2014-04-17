/*jslint node: true, vars: true, white: true */
"use strict";

module.exports = function(setupQuery) {

	var getAllAttributeTypes = setupQuery("SELECT ?? FROM dgmAttributeTypes", ['fields']);

	var getAttributeTypeByID = setupQuery("SELECT ?? FROM dgmAttributeTypes WHERE attributeID = ?", ['fields', 'attributeID']);

	var getAllAttributeCategories = setupQuery("SELECT ?? FROM dgmAttributeCategories", ['fields']);

	var getAttributeCategoryByID = setupQuery("SELECT ?? FROM dgmAttributeCategories WHERE categoryID = ?", ['fields', 'categoryID']);

	return {
		getAllAttributeTypes: getAllAttributeTypes,
		getAttributeTypeByID: getAttributeTypeByID,
		getAllAttributeCategories: getAllAttributeCategories,
		getAttributeCategoryByID: getAttributeCategoryByID
	};
};