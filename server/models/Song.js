const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  lyrics: {
    type: String,
  },
  length: {
    type: String,
    enum: ['short', 'long'],
  },
  status: {
    type: String,
    enum: ['closer', 'opener', 'other'],
  },
  setId: {
    // type: [],
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Set',
    // default: 'none',
  },
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  // },
})

module.exports = mongoose.model('Song', SongSchema)
