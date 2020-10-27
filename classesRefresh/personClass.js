class Person {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.isAlive = true;
    }
    introduceYourself(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

module.exports = Person;