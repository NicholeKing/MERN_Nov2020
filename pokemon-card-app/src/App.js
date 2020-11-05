import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "nes.css/css/nes.min.css";
import CardForm from './components/CardForm';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  const [cardList, setCardList] = useState([]);
  const createCard = (newCard) => {
    setCardList([...cardList, newCard])
  }
  return (
    <div className="App">
      <h1 className="jumbotron bg-info"> <i class="nes-ash"></i> Gotta Collect 'Em All <i class="nes-pokeball"></i></h1>
      <div className="row">
        <div className="col-sm-1 bg-info"></div>
        <div className="col-sm-3"><CardForm makeCard={createCard}/></div>
        <div className="col-sm-8">
          {
            cardList.map((item, i) => <Card myCard={item}/>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
