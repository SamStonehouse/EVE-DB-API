#EVE-DB-API

Eve-db-api is a node.js application built to serve data from the Eve Online database through a
restful API.

##Settings

Currently only MySQL is supported though I've added room to easily add other database drivers
if you'd like them. If they have similar syntax to MySQL a simple copy/paste and driver import
will be enough to get the ball rolling otherwise you'll be relying on rewriting the majority of the queries.

__MySQL Settings__  
`lib/database/mysql/mysql-settings-dist.json` -> rename to `mysql-settings.json`

Settings are database name, username, password and host


__API Settings__  
`lib/api/api-settings.js`

Settings are the routes you wish to use, for example the `api` route specifies the base route.

__Other Settings__  

The listen port is currently defined in server.js, I'll likely bring this out to another file at some point.

##Currently available routes


`/api/agt/agents`

`/api/agt/agents/:agentID`

`/api/agt/agentTypes`

`/api/agt/agentTypes/:agentTypeID`

`/api/agt/researchAgents`

`/api/agt/researchAgents/:researchAgentID`

`/api/cert/certs`

`/api/cert/certs/:certID`

`/api/cert/masteries`

`/api/cert/masteries/:typeID`

`/api/cert/certskills`

`/api/cert/certskills/:certID`

`/api/chr/bloodlines`

`/api/chr/bloodlines/:bloodlineID`

`/api/chr/factions`

`/api/chr/factions/:factionID`

`/api/chr/races`

`/api/chr/races/:raceID`

`/api/chr/ancestries`

`/api/chr/ancestries/:ancestryID`

`/api/chr/attributes`

`/api/chr/attributes/:attributeID`

`/api/crp/npcactivities`

`/api/crp/npcactivities/:activityID`

`/api/crp/npccorporationdivisions`

`/api/crp/npccorporationdivisions/:corporationID`

`/api/crp/npccorporationresearchfields`

`/api/crp/npccorporationresearchfields/:corporationID`

`/api/crp/npccorporations`

`/api/crp/npccorporations/:corporationID`

`/api/crp/npccorporationtrades`

`/api/crp/npccorporationtrades/:corporationID`

`/api/crp/npcdivisions`

`/api/crp/npcdivisions/:divisionID`

`/api/dgm/attributetypes`

`/api/dgm/attributetypes/:attributeID`

`/api/dgm/attributecategories`

`/api/dgm/attributecategories/:categoryID`

`/api/dgm/effects`

`/api/eve/units`

`/api/eve/units/:unitID`

`/api/inv/types`

`/api/inv/types/:typeIDs`

`/api/inv/types/group/:groupID`

`/api/inv/types/marketgroup/:marketGroupID`

`/api/inv/types/full/:typeID`

`/api/inv/types/autocomplete/:autocompletePhrase`

`/api/inv/categories`

`/api/inv/categories/:categoryID`

`/api/inv/groups`

`/api/inv/groups/:groupID`

`/api/inv/groups/category/:categoryID`

`/api/inv/marketgroups`

`/api/inv/marketgroups/:marketGroupID`

`/api/inv/marketgroups/parent/null`

`/api/inv/marketgroups/parent/:parentID`

`/api/inv/blueprinttypes`

`/api/inv/blueprinttypes/parent/:blueprintTypeParentID`

`/api/inv/blueprinttypes/product/:blueprintTypeProductID`

`/api/inv/blueprinttypes/:blueprintTypeID`

`/api/inv/metagroups`

`/api/map/solarsystems`

`/api/map/solarsystems/:solarSystemID`

`/api/map/solarsystems/region/:regionID`

`/api/map/regions`

`/api/map/regions/:regionID`

`/api/map/jumps`

`/api/map/jumps/:solarSystemID`


__TODO__


##Fields parameter

Fields can be specified for each different query through the get parameter `fields` by a mask.

`/api/inv/types?fields=1` - returns an array of types with just their typeIDs

`/api/inv/types?fields=2` - returns an array of types with just their typeNames

`/api/inv/types?fields=3` - returns an array of types with typeIDs and typeNames

##JSONP

The callback parameter can be added to add jsonp functionality

`/api/inv/types?callback=functionName`

and the response will be wrapped in the function functionName(return {});

Note: I am not related to CCP Games and all of their material is still subject to their licensing terms.