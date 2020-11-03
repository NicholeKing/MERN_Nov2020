import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IngredientList from './components/IngredientList.js';
import arrayMove from 'array-move';
import { useState } from 'react';



function App() {
  const [ingredients, setIngredients] = useState([]);
  const [ingURL, setIngURL] = useState("");
  const [name, setName] = useState("");

  const addToSandwich = (e) => {
    e.preventDefault();
    setIngURL("");
    setName("");
    setIngredients([...ingredients, {
      name: name,
      location: ingURL
    }]);
  }

  // const onClickDelete = (e,index) => {
  //   e.preventDefault();
  //   console.log(`your index: ${index}`)
  //   setIngredients([...ingredients.slice(0,index), ...ingredients.slice(index + 1)])
  // }

  const onSortEnd = (params) => {
    // console.log(params);
    // console.log(`old: ${params.oldIndex} and new: ${params.newIndex}`);
    let newSort = arrayMove(ingredients, params.oldIndex, params.newIndex);
    setIngredients(newSort);
  }

  return (
    <div class="container pt-4 pl-5">
      <div className="col align-self-center w-50">
        <form onSubmit={addToSandwich}>
          <div className="form-group align-self-center">
            <input 
              className="form-control"
              placeholder="what's on your sandwich??"
              onChange={(e) => setName(e.target.value)}
              value={name}>
            </input>
          </div>

          <div className="form-group align-self-center">
            <input 
              className="form-control"
              placeholder="enter URL"
              onChange={(e) => setIngURL(e.target.value)}
              value={ingURL}>
            </input>
          </div>

          <div className="form-group align-self-center">
            <input className="btn btn-primary" type="submit"></input>
          </div>
        </form>

        <IngredientList items={ingredients} onSortEnd={onSortEnd}/>
      </div>
    </div>
  );
}

export default App;
