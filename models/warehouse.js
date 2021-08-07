const mongoose = require('mongoose'),
    Schema = mongoose.Schema

let schema = new Schema({
    name: {
        type: String
    },
    address : {
        type : String
    },
    location : {
        type : String
    },
    is_active : {
        type : Boolean
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
})

module.exports = mongoose.model('warehouse', schema)