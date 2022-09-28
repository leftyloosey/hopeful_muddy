const mongoose = require('mongoose')

const SetSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
})

module.exports = mongoose.model('Set', SetSchema)