const { resolvers } = require('graphql-scalars'),
     warehouse = require('./warehouse.js') 

module.exports = [resolvers, warehouse]