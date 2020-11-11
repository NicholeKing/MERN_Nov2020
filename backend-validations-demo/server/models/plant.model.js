const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlantSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "you need a name!!!"]
    },
    type:{
        type: String
    },
    color:{
        type: String
    },
    count:{
        type: Number,
        validate:{
            validator: function(num){
                for(let i = 2; i < num/2; ++i)
                    if(num % i == 0) return false;
                return num > 1;
            },
            message: props => `${props.value} is not prime!!!!`
        }
    }
});

const Plant = mongoose.model("Plant", PlantSchema);

module.exports = Plant;