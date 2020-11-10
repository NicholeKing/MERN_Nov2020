const PlantController = require("../controllers/plant.controller");

module.exports = app => {
    app.get("/api/plants", PlantController.findAllPlants);
    app.get("/api/plants/:_id", PlantController.findSinglePlant);
    app.post("/api/plants/new", PlantController.createPlant);
    app.delete("/api/plants/delete/:_id", PlantController.deletePlant);
    app.put("/api/plants/update/:_id", PlantController.updatePlant)
}