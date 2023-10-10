const PlayerController = require('../controllers/player.controller')

module.exports = (app) => {
    app.get("/api/player", PlayerController.getAllPlayers);
    app.get("/api/player/:id", PlayerController.getPlayerById);
    app.post("/api/player", PlayerController.newPlayer);
    app.patch("/api/player/:id", PlayerController.updatePlayerById);
    app.delete("/api/player/:id", PlayerController.deletePlayerById);
}
