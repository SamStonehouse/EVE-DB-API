/*jslint node: true, vars: true, white: true */
"use strict";

module.exports = function(setupQuery) {

	var queries = {};

	queries.getAllGroups = setupQuery("SELECT ?? FROM invGroups", ['fields']);

	queries.getGroupByID = setupQuery("SELECT ?? FROM invGroups WHERE groupID = ?", ['fields', 'groupID']);

	queries.getGroupsInCategory = setupQuery("SELECT ?? FROM invGroups WHERE categoryID = ?", ['fields', 'categoryID']);

	queries.getAllCategories = setupQuery("SELECT ?? FROM invCategories", ['fields']);

	queries.getCategoryByID = setupQuery("SELECT ?? FROM invCategories WHERE categoryID = ?", ['fields', 'categoryID']);

	queries.getAllMarketGroups = setupQuery("SELECT ?? FROM invMarketGroups", ['fields']);

	queries.getMarketGroupByID =  setupQuery("SELECT ?? FROM invMarketGroups WHERE marketGroupID = ?", ['fields', 'marketGroupID']);

	queries.getMarketGroupsByParentID = setupQuery("SELECT ?? FROM invMarketGroups WHERE parentGroupID = ?", ['fields', 'parentID']);

	queries.getParentMarketGroups = setupQuery("SELECT ?? FROM invMarketGroups WHERE parentGroupID IS NULL", ['fields']);

	queries.getAllTypes = setupQuery("SELECT ?? FROM invTypes", ['fields']);

	queries.getTypeByIDs = setupQuery("SELECT ?? FROM invTypes WHERE invTypes.typeID IN (?)", ['fields', 'typeID']);

	queries.getTypesInGroup = setupQuery("SELECT ?? FROM invTypes WHERE groupID = ?", ['fields', 'groupID']);

	queries.getAllBlueprintTypes =  setupQuery("SELECT ?? FROM invBlueprintTypes", ['fields']);

	queries.getBlueprintTypeByID = setupQuery("SELECT ?? FROM invBlueprintTypes WHERE blueprintTypeID = ?", ['fields', 'blueprintTypeID']);

	queries.getBlueprintTypeByParentID = setupQuery("SELECT ?? FROM invBlueprintTypes WHERE parentBlueprintTypeID = ?", ['fields', 'blueprintTypeParentID']);

	queries.getBlueprintTypeByProductID = setupQuery("SELECT ?? FROM invBlueprintTypes WHERE productTypeID = ?", ['fields', 'blueprintTypeProductID']);

	queries.getAllFlags = setupQuery("SELECT ?? FROM invFlags", ['fields']);

	queries.getFlagByID = setupQuery("SELECT ?? FROM invFlags WHERE flagID = ?", ['fields', 'flagID']);

	queries.getMetaGroups = setupQuery("SELECT ?? FROM invMetaGroups", ['fields']);

	queries.getTypeAutocomplete = setupQuery("SELECT ?? FROM invTypes WHERE typeName LIKE ? ORDER BY typeName LIMIT 20", ['fields', 'phrase']);

	queries.getTypesInMarketGroup = setupQuery("SELECT ?? FROM invTypes WHERE marketGroupID = ?", ['fields', 'marketGroupID']);

	queries.getMetaGroups = setupQuery("SELECT ?? FROM invMetaGroups", ['fields']);

	return queries;
};