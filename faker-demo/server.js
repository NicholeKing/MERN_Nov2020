const express = require("express");
const app = express();
const port = 8000;
var faker = require("faker");

class Person{
    constructor(){
        this.name = faker.name.findName();
        this.creditCard = faker.finance.creditCardNumber();
        this.motherName = faker.name.lastName();
        this.birthPlace = `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()} `
    }
}

class Profile{
    constructor(){
        this.name = faker.internet.userName();
        this.email = faker.internet.email();
        this.pic = faker.internet.avatar();
        this.bio= `I am the ${faker.hacker.adjective()} ${faker.random.word()} in the whole ${faker.hacker.noun()}. I also like ${faker.hacker.verb()}ing`;
    }
}

app.get("/api", (req,res) => {
    res.json({message: "up and running!!! not broken! you know what you're doing!"})
})

app.get("/faker/person", (req,res) => {
    const empi = new Person();
    res.json({
        "name": empi.name,
        "credit_card_number": empi.creditCard,
        "mothers_maiden_name": empi.motherName,
        "birth_place": empi.birthPlace
    });
})

app.get("/faker/profile", (req,res) => {
    const profile = new Profile();
    res.json({profile: profile})
})

app.listen(port, () => console.log(`running on ${port}!!!!!`));