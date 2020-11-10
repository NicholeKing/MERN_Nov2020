const UserController = require("../controllers/user.controller");

module.exports = app => {
    app.get("/api/users/", UserController.findAllUsers);
    app.get("/api/users/:id", UserController.findOneUser);
    app.post("/api/users/new", UserController.createNewUser);
}