import logo from './logo.svg';
import './App.css';
import CardComp from './components/CardComp.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <h1 className="jumbotron">All the cards</h1>
      <CardComp name="Chuck" health={350} hb="Roundhouse Kick"/>
      <CardComp name="Rambo" health={50} hb="Guns and explosives"/>
    </div>
  );
}

export default App;
