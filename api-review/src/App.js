import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState({})

  const getResults = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/bulbasaur")
    .then(res => {
      console.log(res.data);
      setPokemon(res.data);
      // pokemon = res.data;
    })
  }
  return (
    <div className="App">
      <button onClick={getResults}>Click Me!</button>
      <p>name: {pokemon.name}</p>
      <p>types:</p>
      {/* <p>{pokemon.types}</p> */}
      <ul>
        {
          pokemon.types 
          ?
            pokemon.types.map((type, i) => {
              console.log(type.type.name);
              return <li key={i}>{type.type.name}</li>
            })
          :
            ""
        }
      </ul>
    </div>
  );
}

export default App;
