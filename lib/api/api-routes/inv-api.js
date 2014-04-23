/*jslint node: true, vars: true, white: true */
"use strict";

module.exports = function(invApiGroup) {
	invApiGroup.addroute('/types', function(req, db, apiMasks, responseFn) {
		var queryParams = {
			fields: apiMasks.typeMask.getFields(req.query.fields)
		};

		db.getAllTypes(queryParams, responseFn);
	});

	invApiGroup.addroute('/types/:typeID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			typeID: req.params.typeID,
			fields: apiMasks.typeMask.getFields(req.query.fields)
		};

		db.getTypeByID(queryParams, responseFn);
	});

	invApiGroup.addroute('/types/group/:groupID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			groupID: req.params.groupID,
			fields: apiMasks.typeMask.getFields(req.query.fields)
		};

		db.getTypesInGroup(queryParams, responseFn);
	});

	invApiGroup.addroute('/types/autocomplete/:autocompletePhrase', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			phrase: "%" + req.params.autocompletePhrase + "%",
			fields: apiMasks.typeMask.getFields(req.query.fields)
		};


		db.getTypeAutocomplete(queryParams, responseFn);
	});

	invApiGroup.addroute('/categories', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.categoryMask.getFields(req.query.fields)
		};

		db.getAllCategories(queryParams, responseFn);
	});

	invApiGroup.addroute('/categories/:categoryID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			categoryID: req.params.categoryID,
			fields: apiMasks.categoryMask.getFields(req.query.fields)
		};

		db.getCategoryByID(queryParams, responseFn);
	});

	invApiGroup.addroute('/groups', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.groupMask.getFields(req.query.fields)
		};

		db.getAllGroups(queryParams, responseFn);
	});

	invApiGroup.addroute('/groups/:groupID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			groupID: req.params.groupID,
			fields: apiMasks.groupMask.getFields(req.query.fields)
		};

		db.getGroupByID(queryParams, responseFn);
	});

	invApiGroup.addroute('/groups/category/:categoryID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			categoryID: req.params.categoryID,
			fields: apiMasks.groupMask.getFields(req.query.fields)
		};

		db.getGroupsInCategory(queryParams, responseFn);
	});

	invApiGroup.addroute('/marketgroups', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.marketGroupMask.getFields(req.query.fields)
		};

		db.getAllMarketGroups(queryParams, responseFn);
	});

	invApiGroup.addroute('/marketgroups/:marketGroupID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			marketGroupID: req.params.marketGroupID,
			fields: apiMasks.marketGroupMask.getFields(req.query.fields)
		};

		db.getMarketGroupByID(queryParams, responseFn);
	});

	invApiGroup.addroute('/marketgroups/parent/null', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.marketGroupMask.getFields(req.query.fields)
		};

		db.getParentMarketGroups(queryParams, responseFn);
	});

	invApiGroup.addroute('/marketgroups/parent/:parentID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			parentID: req.params.parentID,
			fields: apiMasks.marketGroupMask.getFields(req.query.fields)
		};

		db.getMarketGroupsByParentID(queryParams, responseFn);
	});

	invApiGroup.addroute('/blueprinttypes', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.blueprintTypeMask.getfields(req.query.fields)
		};

		db.getAllBlueprintTypes(queryParams, responseFn);
	});

	invApiGroup.addroute('/blueprinttypes/parent/:blueprintTypeParentID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			blueprintTypeParentID: req.params.blueprintTypeParentID,
			fields: apiMasks.blueprintTypeMask.getFields(req.query.fields)
		};
		
		db.getBlueprintTypeByParentID(queryParams, responseFn);
	});

	invApiGroup.addroute('/blueprinttypes/product/:blueprintTypeProductID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			blueprintTypeProductID: req.params.blueprintTypeProductID,
			fields: apiMasks.blueprintTypeMask.getFields(req.query.fields)
		};

		db.getBlueprintTypeByProductID(queryParams, responseFn);
	});

	invApiGroup.addroute('/blueprinttypes/:blueprintTypeID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			blueprintTypeID: req.params.blueprintTypeID,
			fields: apiMasks.blueprintTypeMask.getfields(req.query.fields)
		};

		db.getBlueprintTypeByID(queryParams, responseFn);
	});
};
