/*jslint node: true, vars: true, white: true */
"use strict";


module.exports = function(invApiGroup, apiUtilities) {
	invApiGroup.addroute('/types', function(req, db, apiMasks, responseFn) {
		var queryParams = {
			fields: apiMasks.typeMask.getFields(req.query.fields)
		};

		db.inv.getAllTypes(queryParams, responseFn);
	});

	invApiGroup.addroute('/types/:typeIDs', function(req, db, apiMasks, responseFn) {



		var queryParams = {
			typeID: req.params.typeIDs.split(","),
			fields: apiMasks.typeMask.getFields(req.query.fields)
		};

		db.inv.getTypeByIDs(queryParams, responseFn);
	});

	invApiGroup.addroute('/types/group/:groupID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			groupID: req.params.groupID,
			fields: apiMasks.typeMask.getFields(req.query.fields)
		};

		db.inv.getTypesInGroup(queryParams, responseFn);
	});

	invApiGroup.addroute('/types/full/:typeID', function(req, db, apiMasks, responseFn) {
		

		var typeFields = apiMasks.typeMask.getFields(req.query.fields);
		var attributeFields = apiMasks.attributeTypesMask.getFields(req.query.attributefields);
		var effectFields = apiMasks.effectMask.getFields(req.query.effectfields);

		var typeQueryParams = {
			typeID: req.params.typeID.split(","),
			fields: typeFields
		};

		db.inv.getTypeByIDs(typeQueryParams, function(err, typeResult) {

			if (err) { return responseFn(err); }

			var numSubQueries = typeResult.length * 2;

			var responseCallback = apiUtilities.counterCallback(numSubQueries, responseFn);

			var attributeCallback = function(type) {
				return function(err, attributesResult) {
					if (!err) {
						type.attributes = attributesResult;
					} else {
						//TODO: Log error
					}

					responseCallback(undefined, typeResult);
				};
			};

			var effectCallback = function(type) {
				return function(err, effectsResult) {
					if (!err) {
						type.effects = effectsResult;
					} else {
						//TODO: Log error
					}

					responseCallback(undefined, typeResult);
				};
			};


			for (var i = 0; i < typeResult.length; i++) {

				var attrQueryParams = {
					typeID: typeResult[i].typeID,
					fields: attributeFields
				};

				var effQueryParams = {
					typeID: typeResult[i].typeID,
					fields: effectFields
				};


				db.dgm.getTypeAttributesByTypeID(attrQueryParams, attributeCallback(typeResult[i]));
				db.dgm.getTypeEffectsByTypeID(effQueryParams, effectCallback(typeResult[i]));
			}
		});
	});

	invApiGroup.addroute('/types/autocomplete/:autocompletePhrase', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			phrase: "%" + req.params.autocompletePhrase + "%",
			fields: apiMasks.typeMask.getFields(req.query.fields)
		};


		db.inv.getTypeAutocomplete(queryParams, responseFn);
	});

	invApiGroup.addroute('/categories', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.categoryMask.getFields(req.query.fields)
		};

		db.inv.getAllCategories(queryParams, responseFn);
	});

	invApiGroup.addroute('/categories/:categoryID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			categoryID: req.params.categoryID,
			fields: apiMasks.categoryMask.getFields(req.query.fields)
		};

		db.inv.getCategoryByID(queryParams, responseFn);
	});

	invApiGroup.addroute('/groups', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.groupMask.getFields(req.query.fields)
		};

		db.inv.getAllGroups(queryParams, responseFn);
	});

	invApiGroup.addroute('/groups/:groupID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			groupID: req.params.groupID,
			fields: apiMasks.groupMask.getFields(req.query.fields)
		};

		db.inv.getGroupByID(queryParams, responseFn);
	});

	invApiGroup.addroute('/groups/category/:categoryID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			categoryID: req.params.categoryID,
			fields: apiMasks.groupMask.getFields(req.query.fields)
		};

		db.inv.getGroupsInCategory(queryParams, responseFn);
	});

	invApiGroup.addroute('/marketgroups', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.marketGroupMask.getFields(req.query.fields)
		};

		db.inv.getAllMarketGroups(queryParams, responseFn);
	});

	invApiGroup.addroute('/marketgroups/:marketGroupID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			marketGroupID: req.params.marketGroupID,
			fields: apiMasks.marketGroupMask.getFields(req.query.fields)
		};

		db.inv.getMarketGroupByID(queryParams, responseFn);
	});

	invApiGroup.addroute('/marketgroups/parent/null', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.marketGroupMask.getFields(req.query.fields)
		};

		db.inv.getParentMarketGroups(queryParams, responseFn);
	});

	invApiGroup.addroute('/marketgroups/parent/:parentID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			parentID: req.params.parentID,
			fields: apiMasks.marketGroupMask.getFields(req.query.fields)
		};

		db.inv.getMarketGroupsByParentID(queryParams, responseFn);
	});

	invApiGroup.addroute('/blueprinttypes', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			fields: apiMasks.blueprintTypeMask.getfields(req.query.fields)
		};

		db.inv.getAllBlueprintTypes(queryParams, responseFn);
	});

	invApiGroup.addroute('/blueprinttypes/parent/:blueprintTypeParentID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			blueprintTypeParentID: req.params.blueprintTypeParentID,
			fields: apiMasks.blueprintTypeMask.getFields(req.query.fields)
		};
		
		db.inv.getBlueprintTypeByParentID(queryParams, responseFn);
	});

	invApiGroup.addroute('/blueprinttypes/product/:blueprintTypeProductID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			blueprintTypeProductID: req.params.blueprintTypeProductID,
			fields: apiMasks.blueprintTypeMask.getFields(req.query.fields)
		};

		db.inv.getBlueprintTypeByProductID(queryParams, responseFn);
	});

	invApiGroup.addroute('/blueprinttypes/:blueprintTypeID', function(req, db, apiMasks, responseFn) {

		var queryParams = {
			blueprintTypeID: req.params.blueprintTypeID,
			fields: apiMasks.blueprintTypeMask.getfields(req.query.fields)
		};

		db.inv.getBlueprintTypeByID(queryParams, responseFn);
	});
};
