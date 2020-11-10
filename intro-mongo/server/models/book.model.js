const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;