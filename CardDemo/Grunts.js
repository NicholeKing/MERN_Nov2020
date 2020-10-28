const Card = require('./Card.js');

class Grunt extends Card {
    constructor(name, type){
        super(name, type);
        this.hp = 100;
        this.strength = 20;
        this.hiddenAbility = "Sacrifice";
        console.log("You made a new grunt player!");
    }
    sacrifice(target){
        target.hp += this.hp;
        console.log(`${this.name} sacrifices himself and gives ${this.hp} health to ${target.name}!`);
        this.hp = 0;
        this.isAlive = false;
    }
}
module.exports = Grunt;