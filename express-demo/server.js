//line 2-7 are boilerplate code that can just be copy pasted
const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//array to send out in get request and push to in post request
const threeMovies = [
    {movie: "Spider-Man 3", desc:"what if spider-man were goth"},
    {movie: "Spy Kids 3", desc: "what if elijah wood was the best character in the game"}
]

//get requests will send over information when the client(front end or postman) requests through that URL
app.get("/api", (req,res) => {
    console.log("hello from the back end console!");
    res.json({message: "hello mars!"});
})

//post request will send over json through req.body. response sent as confirmation
app.post("/api/repeat", (req,res) => {
    console.log(req.body);
    res.json({message: "went through just fine"});
})

app.get("/api/movies", (request, res) => {
    res.json(threeMovies);
})

app.post("/api/movies/add", (req,res) => {
    threeMovies.push(req.body);
    res.json({message: "went through just fine"});
})

//this line is boilerplate to start the server and print to the console when it's confirmed running
app.listen(port, () => console.log(`running on ${port}!!!!!`));