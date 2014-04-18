/*jslint node: true, vars: true, white: true */
"use strict";

var Mask = require('./../mask/mask.js');

Mask.prototype.getFields = function(providedMask) {
	var fieldMask = this;
	
	var fields = fieldMask.checkMask(providedMask);

	if (fields === undefined) {
		return fieldMask.getAllValues();
	}

	if ((Object.prototype.toString.call(fields) === '[object Array]') && (fields.length > 0)) {
		return fields;
	}

	return fieldMask.getAllValues();
};

var agentMask = new Mask([
	"agentID",
	"divisionID",
	"corporationID",
	"locationID",
	"level",
	"quality",
	"agentTypeID",
	"isLocator"
	]);

var agentTypeMask = new Mask([
	"agentTypeID",
	"agentType"
	]);

var researchAgentMask = new Mask([
	"agentID",
	"typeID"
	]);

var certMask = new Mask([
	"certID",
	"description",
	"groupid",
	"name"
	]);

var masteriesMask = new Mask([
	"typeID",
	"masteryLevel",
	"certID"
	]);

var skillsMask = new Mask([
	"certID",
	"skillID",
	"certLevelInt",
	"skillLevel",
	"certLevelText"
	]);

var activitiesMask = new Mask([
	"activityID",
	"activityName",
	"description"
	]);

var NPCCorpDivisionsMask = new Mask([
	"corporationID",
	"divisionID",
	"size"
	]);

var NPCCorpResearchFieldsMask = new Mask([
	"skillID",
	"corporationID"
	]);

var NPCCorpMask = new Mask([
	"corporationID",
	"size",
	"extent",
	"solarSystemID",
	"investorID1",
	"investorShares1",
	"investorID2",
	"investorShares2",
	"investorID3",
	"investorShares3",
	"investorID4",
	"investorShares4",
	"friendID",
	"enemyID",
	"publicShares",
	"initialPrice",
	"minSecurity",
	"scattered",
	"fringe",
	"corridor",
	"hub",
	"border",
	"factionID",
	"sizeFactor",
	"stationCount",
	"stationSystemCount",
	"description",
	"iconID"
	]);

var NPCCorpTradesMask = new Mask([
	"corporationID",
	"typeID"
	]);

var NPCDivisionsMask = new Mask([
	"divisionID",
	"divisionName",
	"description",
	"leaderType"
	]);

var categoryMask = new Mask([
	"categoryID",
	"categoryName",
	"description"
	]);

var typeMask = new Mask([
	"typeID",
	"groupID",
	"typeName",
	"description",
	"mass",
	"volume",
	"capacity",
	"portionSize",
	"raceID",
	"basePrice",
	"published",
	"marketGroupID",
	"chanceOfDuplicating"
	]);

var groupMask = new Mask([
	"groupID",
	"categoryID",
	"groupName",
	"description",
	"iconID",
	"useBasePrice",
	"allowManufacture",
	"allowRecycler",
	"anchored",
	"anchorable",
	"fittableNonSingleton",
	"published"
	]);

var marketGroupMask = new Mask([
	"marketGroupID",
	"parentGroupID",
	"marketGroupName",
	"description",
	"iconID",
	"hasTypes"
	]);

var blueprintTypeMask = new Mask([
	"blueprintTypeID",
	"parentBlueprintTypeID",
	"productTypeID",
	"productionTime",
	"techLevel",
	"researchProductivityTime",
	"researchMaterialTime",
	"researchCopyTime",
	"researchTechTime",
	"productivityModifier",
	"materialModifier",
	"wasteFactor",
	"maxProductionLimit"
	]);

var solarSystemMask = new Mask([
	"regionID",
	"constellationID",
	"solarSystemID",
	"solarSystemName",
	"x",
	"y",
	"z",
	"xMin",
	"xMax",
	"yMin",
	"yMax",
	"zMin",
	"zMax",
	"luminosity",
	"border",
	"fringe",
	"corridor",
	"hub",
	"international",
	"regional",
	"constellation",
	"security",
	"factionID",
	"radius",
	"sunTypeID",
	"securityClass"
	]);

var regionMask = new Mask([
	"regionID",
	"regionName",
	"x",
	"y",
	"z",
	"xMin",
	"xMax",
	"yMin",
	"yMax",
	"zMin",
	"zMax",
	"factionID",
	"radius"
	]);

module.exports = {
	agentMask: agentMask,
	agentTypeMask: agentTypeMask,
	researchAgentMask: researchAgentMask,
	certMask: certMask,
	masteriesMask: masteriesMask,
	skillsMask: skillsMask,
	activitiesMask: activitiesMask,
	NPCCorpDivisionsMask: NPCCorpDivisionsMask,
	NPCCorpResearchFieldsMask: NPCCorpResearchFieldsMask,
	NPCCorpMask: NPCCorpMask,
	NPCCorpTradesMask: NPCCorpTradesMask,
	NPCDivisionsMask: NPCCorpDivisionsMask,
	categoryMask: categoryMask,
	typeMask: typeMask,
	groupMask: groupMask,
	marketGroupMask: marketGroupMask,
	blueprintTypeMask: blueprintTypeMask,
	solarSystemMask: solarSystemMask,
	regionMask: regionMask
};