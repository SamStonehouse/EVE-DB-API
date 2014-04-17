/*jslint node: true, vars: true, white: true */
"use strict";

module.exports = function(setupQuery) {
	
	var getAllGroups = setupQuery("SELECT ?? FROM invGroups WHERE published = 1", ['fields']);

	var getGroupByID = setupQuery("SELECT ?? FROM invGroups WHERE published = 1 AND groupID = ?", ['fields', 'groupID']);

	var getGroupsInCategory = setupQuery("SELECT ?? FROM invGroups WHERE published = 1 AND categoryID = ?", ['fields', 'categoryID']);

	var getAllCategories = setupQuery("SELECT ?? FROM invCategories WHERE published = 1", ['fields']);

	var getCategoryByID = setupQuery("SELECT ?? FROM invCategories WHERE published = 1 AND categoryID = ?", ['fields', 'categoryID']);

	var getAllMarketGroups = setupQuery("SELECT ?? FROM invMarketGroups", ['fields']);

	var getMarketGroupByID =  setupQuery("SELECT ?? FROM invMarketGroups WHERE marketGroupID = ?", ['fields', 'marketGroupID']);

	var getMarketGroupsByParentID = setupQuery("SELECT ?? FROM invMarketGroups WHERE parentGroupID = ?", ['fields', 'parentID']);

	var getParentMarketGroups = setupQuery("SELECT ?? FROM invMarketGroups WHERE parentGroupID IS NULL", ['fields']);

	var getAllTypes = setupQuery("SELECT ?? FROM invTypes", ['fields']);

	var getTypeByID = setupQuery("SELECT ?? FROM invTypes WHERE published = 1 AND typeID = ?", ['fields', 'typeID']);

	var getTypesInGroup = setupQuery("SELECT ?? FROM invTypes WHERE published = 1 AND groupID = ?", ['fields', 'groupID']);

	var getAllBlueprintTypes =  setupQuery("SELECT ?? FROM invBlueprintTypes", ['fields']);

	var getBlueprintTypeByID = setupQuery("SELECT ?? FROM invBlueprintTypes WHERE blueprintTypeID = ?", ['fields', 'blueprintTypeID']);

	var getBlueprintTypeByParentID = setupQuery("SELECT ?? FROM invBlueprintTypes WHERE parentBlueprintTypeID = ?", ['fields', 'blueprintTypeParentID']);

	var getBlueprintTypeByProductID = setupQuery("SELECT ?? FROM invBlueprintTypes WHERE productTypeID = ?", ['fields', 'blueprintTypeProductID']);

	var getAllFlags = setupQuery("SELECT ?? FROM invFlags", ['fields']);

	var getFlagByID = setupQuery("SELECT ?? FROM invFlags WHERE flagID = ?", ['fields', 'flagID']);

	var getMetaGroups = setupQuery("SELECT ?? FROM invMetaGroups", ['fields']);

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
		getTypesInGroup: getTypesInGroup,
		getAllBlueprintTypes: getAllBlueprintTypes,
		getBlueprintTypeByID: getBlueprintTypeByID,
		getBlueprintTypeByParentID: getBlueprintTypeByParentID,
		getBlueprintTypeByProductID: getBlueprintTypeByProductID,
		getAllFlags: getAllFlags,
		getFlagByID: getFlagByID
	};
};