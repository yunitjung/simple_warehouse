const { typeDefs } = require('graphql-scalars'),
    root = require('./root.js'),
    warehouse = require('./warehouse.js')

module.exports = [...typeDefs, root, warehouse]