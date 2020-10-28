class Card {
    constructor(name, type, hp, hiddenAbility){
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.strength = 20;
        this.hiddenAbility = hiddenAbility;
        this.isAlive = true;
    }
    showStats(){
        console.log(this);
    }
    attack(target){
        target.hp -= this.strength;
        console.log(`${this.name} attacks ${target.name}!`);
        if(target.hp <= 0){
            console.log(`${target.name} has been slain!`);
            target.hp = 0;
            target.isAlive = false;
        }
    }
}

module.exports = Card;