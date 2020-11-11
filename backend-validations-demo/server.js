const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));

require("./server/routes/plant.routes")(app);

app.listen(8000, () => console.log("Running on 8000!! Is a new way I like to be!!!!!"));
// I'm just running on 8000!
// Come on, baby, run to me!