const Card = require('./Card.js');

class Legendary extends Card {
    constructor(name, type){
        super(name, type);
        this.hp = 250;
        this.strength = 40;
        this.hiddenAbility = "One Hit KO";
        console.log("You made a legendary player!");
    }
    OneHitKO(target){
        if(target.hp <= 50){
            console.log(`${this.name} one shots ${target.name}, finishing him!`);
            target.hp = 0;
            target.isAlive = false;
        } else {
            console.log(`${target.name} isn't going down that easy!`);
        }
    }
}

module.exports = Legendary;