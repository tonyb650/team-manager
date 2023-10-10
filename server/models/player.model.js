const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema(
    { playerName: {
        type: String,
        required: [true, "Player name is required."],
        minlength: [2, "Player name must be at least 2 characters long."],
    },
      position: { type: String},
      status: { type: [Number]},
    }, {timestamps: true}
)

module.exports = mongoose.model('Player', playerSchema)