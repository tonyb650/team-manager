const Player = require('../models/player.model');

module.exports = {
    newPlayer : (req,res) => {
        Player.create(req.body)
        .then(newlyCreatedPlayer => res.json(newlyCreatedPlayer))
        .catch(err => res.status(400).json(err))
    },

    getAllPlayers : (req,res) => {
        Player.find({})
        .then(allPlayers => res.json(allPlayers))
        .catch(err => res.status(400).json(err))
    },

    getPlayerById : (req, res) => {
        Player.findOne({_id : req.params.id})
        .then(onePlayer => res.json(onePlayer))
        .catch(err => res.status(400).json(err))
    },

    updatePlayerById : (req,res) => {
        Player.findOneAndUpdate( {_id : req.params.id}, req.body, { new: true, runValidators:true})
        .then(updatedPlayer => res.json(updatedPlayer))
        .catch(err => res.status(400).json(err))
    },

    deletePlayerById : (req, res) => {
        Player.findOneAndDelete({_id : req.params.id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
    }
}