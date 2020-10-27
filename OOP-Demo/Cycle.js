class Cycle{
    constructor(numWheels, color){
        this.wheels = numWheels;
        this.color = color;
        // console.log("cycle constructor");
    }

    ride(){
        console.log("hey I'm ridin here!");
        return this.wheels;
    }
}

module.exports = Cycle;