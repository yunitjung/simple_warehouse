const  { gql } = require('apollo-server-express')

module.exports =  gql`
    extend type Query {
        getAllWarehouses: ResponseWarehouseArray
    }

    type ResponseWarehouseArray {
        success : Boolean
        message : String
        data: [Warehouse]
    }

    type Warehouse {
        id: ID
        name: String
        address: String
        location: String
        is_active: Boolean
        created_at: DateTime
        updated_at: DateTime
    }

    extend type Mutation {
        createWarehouse(name: String, address: String, location: String, is_active: Boolean): Warehouse
    }
`