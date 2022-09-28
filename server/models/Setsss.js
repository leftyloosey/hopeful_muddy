const mongoose = require('mongoose')

const SetSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    // status: {
    //     type: String,
    //     enum: ['not started', 'in progress', 'completed']
    // },
    songId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song',
    }
})

module.exports = mongoose.model('Set', SetSchema)