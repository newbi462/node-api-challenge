const knex = require("knex");
const knexConfig = require("../knexfile.js");
const environment = process.env.NODE_ENV || "development";

module.exports = knex(knexConfig[environment]);


//dose "Make nodemon be a development time dependency only, it shouldn't be deployed to production." mean chcnge the NODE part of this file?
//This is wehy I asked, because our only instrution is WE WILL COVER THIS NEXT WEEK... 
