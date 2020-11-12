const CreatureController = require("../controllers/creature.controller");

module.exports = app => {
    //Get ALL
    app.get("/api/creatures", CreatureController.findAllCreatures);
    //get ONE
    app.get("/api/creatures/:_id", CreatureController.findOneCreature);
    //Create ONE
    app.post("/api/creatures/new", CreatureController.createCreature);
    //Delete ONE
    app.delete("/api/creatures/delete/:_id", CreatureController.deleteCreature);
    //Update ONE
    app.put("/api/creatures/update/:_id", CreatureController.updateCreature);
}