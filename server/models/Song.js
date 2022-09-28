const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ['not started', 'in progress', 'completed']
    },
    setId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Set',
    }
})

module.exports = mongoose.model('Song', SongSchema)