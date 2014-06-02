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

Settings are the routes you wish to use, for example the `api` route specifies the base
to which queries will be answered. All can be empty.

__Other Settings__  

The listen port is currently defined in server.js, I'll likely bring this out to another file at some point.

##Currently available routes

`/api/inv/types` - All types

`/api/inv/types/:typeIDs` - :typeIDs is a comma-seperated list of typeIDs you wish to retreive

`/api/inv/types/full/:typeIDs` - As above but also retreives the attributes for each type

__TODO__


##Fields parameter

Fields can be specified for each different query through the get parameter `fields` by a mask.

`/api/inv/types?fields=1` - returns an array of types with just their typeIDs

`/api/inv/types?fields=2` - returns an array of types with just their typeNames

`/api/inv/types?fields=3` - returns an array of types with typeIDs and typeNames


Note: I am not related to CCP Games and all of their material is still subject to their licensing terms.