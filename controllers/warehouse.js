const Model = require('../models/warehouse')
    jsonResponse = require('../helpers/jsonResponse')

module.exports = {
    getAll: async () => {
        try {
            let datas = await Model.find()

            return jsonResponse.success('Succesfully retrieve data', datas)

        } catch (error) {
            console.log(error)
        }
    },
    getById: async () => {

    },
    create: async (arg) => {
        try {
            let data = await Model.create(arg)

            return data
        } catch (error) {
            console.log(error)
        }
    },
    update: async () => {

    },
    destroy: async () => {

    }
}