const Cycle = require('./Cycle.js');

class Unicycle extends Cycle{
    constructor(color, seatMaterial){
        super(1, color);
        this.seat = seatMaterial;
    }

    ride(){
        console.log("honnk honk and the sound of embarrassment");
    }
}

module.exports = Unicycle;