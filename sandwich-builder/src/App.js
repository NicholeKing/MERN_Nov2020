import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ingredient from './components/Ingredient';
import { useState } from 'react';

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [ingURL, setIngURL] = useState("");
  const [name, setName] = useState("");

  const addToSandwich = (e) => {
    e.preventDefault();
    setIngredients([...ingredients, {
      name: name,
      location: ingURL
    }]);
  }

  const onClickDelete = (index) => {
    //sets the array in state to include everything before selected item and everything after selected item
    setIngredients([...ingredients.slice(0,index), ...ingredients.slice(index + 1)])
  }

  return (
    <div className="bg-light mx-auto">
      <form onSubmit={addToSandwich}>
        <div className="form-group col-5">
          <input 
            className="form-control"
            placeholder="what's on your sandwich??"
            onChange={(e) => setName(e.target.value)}>
          </input>
        </div>

        <div className="form-group col-5">
          <input 
            className="form-control"
            placeholder="enter URL"
            onChange={(e) => setIngURL(e.target.value)}>
          </input>
        </div>

        <div className="form-group">
          <input className="btn btn-primary" type="submit"></input>
        </div>
      </form>

      {
        ingredients.map((ing, i) => {
          return <Ingredient source={ing.location} onClickDelete={onClickDelete} index={i} key={i}/>
        })
      }
    </div>
  );
}

export default App;
