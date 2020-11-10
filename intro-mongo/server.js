const express = require("express");
const app = express();
const port = 8000;

require("./server/config/mongoose.config");

app.get("/", (req,res) => {
    console.log("Hello from the front page!");
    res.json({message: "It worked!"})
})

app.use(express.json(), express.urlencoded({extended: true}));

const AllUserRoutes = require("./server/routes/user.routes");
AllUserRoutes(app);

app.listen(port, ()=>console.log(`listening on port: ${port}!`));