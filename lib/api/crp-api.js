/*jslint node: true, vars: true, white: true */
"use strict";

var Mask = require('./../mask/mask.js');

var next;
var maskInterpreter;
var db;

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

var NPCDivisions = new Mask([
	"divisionID",
	"divisionName",
	"description",
	"leaderType"
	]);

var setupRoutes = function(app, next) {

};

module.exports = function(_db, _maskInterpreter) {
	db = _db;
	maskInterpreter = _maskInterpreter;
	
	return {
		setupRoutes: setupRoutes
	};
};
