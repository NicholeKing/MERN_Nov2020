import logo from './logo.svg';
import './App.css';
import FirstComp from './components/FirstComp.js';
import SecondComp from './components/SecondComp.jsx';
import CardCompon from './components/CardComp.jsx';

function App() {
  return (
    <div className="App">
      <FirstComp/>
      <SecondComp>
        <h1>Here are some cards:</h1>
        <CardCompon cardName="Chuck Norris" health="250" hb="Roundhouse Kick" weapons={["Foot", "Self", "Fist"]}/>
        <CardCompon cardName="Rambo" health={300} hb="Guns, many guns...and boom" weapons={["Foot", "Self", "Fist"]}/>
        <CardCompon cardName="Albert" health={250} hb="One hit" weapons={["Foot", "Self", "Fist"]}/>
      </SecondComp>
    </div>
  );
}

export default App;
