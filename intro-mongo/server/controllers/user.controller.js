const User = require("../models/user.model");

module.exports.findAllUsers = (req, res) => {
    User.find()
        .then(allUsers => res.json({users: allUsers}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}

module.exports.findOneUser = (req, res) => {
    User.findOne({_id: req.params.id})
        .then(oneUser => res.json({user: oneUser}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}

module.exports.createNewUser = (req, res) => {
    User.create(req.body)
        .then(newUser => res.json({user: newUser}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}