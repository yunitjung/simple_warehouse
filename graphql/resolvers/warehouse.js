const controllers = require('../../controllers/warehouse')

module.exports = {
    Query : {
        getAllWarehouses: () => controllers.getAll()
    },
    Mutation : {
        createWarehouse: (_, args) => controllers.create(args)
    }
}