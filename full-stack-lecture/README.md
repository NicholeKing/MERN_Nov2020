## Full stack MERN cheat sheet

#### Don't forget these steps when setting up your project!
* create project folder
* create server.js with boilerplate code adjusted for the name of your routes file
* run `npm init`
* run `npm install express mongoose cors`
    * this adds all the necessary dependencies for our back end
* set up the file structure as such
    * ![back end structure](https://github.com/NicholeKing/MERN_Nov2020/tree/main/full-stack-lecture/img/backend_structure.PNG)
    * don't forget to add the files and code in the server folder!
* create the frontend by running `npx create-react-app client` from the main project folder
* `cd client/`
* run `npm install axios @reach/router`
    * this adds the dependencies we need for the front end