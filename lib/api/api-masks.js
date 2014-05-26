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


//##### AGT MASKS ########

var agentMask = new Mask([
	"agtAgents.agentID",
	"agtAgents.divisionID",
	"agtAgents.corporationID",
	"agtAgents.locationID",
	"agtAgents.level",
	"agtAgents.quality",
	"agtAgents.agentTypeID",
	"agtAgents.isLocator"
	]);

var agentTypeMask = new Mask([
	"agentTypeID",
	"agentType"
	]);

var researchAgentMask = new Mask([
	"agentID",
	"typeID"
	]);

//##### CERT MASKS ######

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

//###### CRP MASKS #######

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

//###### DGM MASKS #######

var attributeTypesMask = new Mask([
	"attributeID",
	"attributeName",
	"description",
	"iconID",
	"defaultValue",
	"published",
	"displayName",
	"unitID",
	"stackable",
	"highIsGood",
	"categoryID"
	]);

var typeAttributesMask = new Mask([
	"typeID",
	"attributeID",
	"valueInt",
	"valueFloat"
	]);

var effectMask = new Mask([
	"dgmEffects.effectID",
	"dgmEffects.effectName",
	"dgmEffects.effectCategory",
	"dgmEffects.preExpression",
	"dgmEffects.postExpression",
	"dgmEffects.description",
	"dgmEffects.guid",
	"dgmEffects.iconID",
	"dgmEffects.isOffensive",
	"dgmEffects.isAssistance",
	"dgmEffects.durationAttributeID",
	"dgmEffects.trackingSpeedAttributeID",
	"dgmEffects.dischargeAttributeID",
	"dgmEffects.rangeAttributeID",
	"dgmEffects.falloffAttributeID",
	"dgmEffects.disallowAutoRepeat",
	"dgmEffects.published",
	"dgmEffects.displayName",
	"dgmEffects.isWarpSafe",
	"dgmEffects.rangeChance",
	"dgmEffects.electronicChance",
	"dgmEffects.propulsionChance",
	"dgmEffects.distribution",
	"dgmEffects.sfxName",
	"dgmEffects.npcUsageChanceAttributeID",
	"dgmEffects.npcActivationChanceAttributeID",
	"dgmEffects.fittingUsageChanceAttributeID"
	]);

//###### INV MASKS #######

var categoryMask = new Mask([
	"categoryID",
	"categoryName",
	"description"
	]);

var typeMask = new Mask([
	"invTypes.typeID",
	"invTypes.groupID",
	"invTypes.typeName",
	"invTypes.description",
	"invTypes.mass",
	"invTypes.volume",
	"invTypes.capacity",
	"invTypes.portionSize",
	"invTypes.raceID",
	"invTypes.basePrice",
	"invTypes.published",
	"invTypes.marketGroupID",
	"invTypes.chanceOfDuplicating"
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

var metaGroupMask = new Mask([
	"metaGroupName",
	"metaGroupID"
	]);

//##### MAP MASKS #########

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

	attributeTypesMask: attributeTypesMask,
	typeAttributesMask: typeAttributesMask,
	effectMask: effectMask,

	categoryMask: categoryMask,
	typeMask: typeMask,
	groupMask: groupMask,
	marketGroupMask: marketGroupMask,
	blueprintTypeMask: blueprintTypeMask,
	metaGroupMask: metaGroupMask,

	solarSystemMask: solarSystemMask,
	regionMask: regionMask
};