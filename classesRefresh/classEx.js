const Person = require('./personClass.js');

class Wizard extends Person {
    constructor(name, health, intel){
        super(name, health);
        this.intel = intel;
        this.hasHat = false;
        this.wand = "Just a twig";
        this.hasBroom = false;
        console.log("Wizard created!");
    }
    createWizard(){
        console.log("I am a wizard");
    }

    playQuidditch(){
        if(this.hasBroom){
            console.log("You made the team!");
        } else {
            console.log("You can't play");
        }
    }
}
var w1 = new Wizard("Harry", 100, 4);
w1.introduceYourself();
console.log(w1.isAlive);
// console.log(w1.hasHat);
// w1.wand = "Better twig";
// console.log(w1.wand);
// w1.createWizard();
// w1.playQuidditch();
// w1.hasBroom = true;
// w1.playQuidditch();