const Card = require('./Card.js');

class Medic extends Card {
    constructor(name, type){
        super(name, type);
        this.hp = 80;
        this.strength = 15;
        this.hiddenAbility = "Revive";
        console.log("You made a medic player!");
    }
    Revive(target){
        if(!target.isAlive){
            target.isAlive = true;
            target.hp = 50;
            console.log(`${this.name} revived ${target.name}, giving him 50 health!`);
        } else {
            console.log("Cannot revive someone who is still breathing");
        }
    }
}

module.exports = Medic;

