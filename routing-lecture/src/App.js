import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import PuppiesComp from './components/PuppiesComp';
import KittenComp from './components/KittenComp';
import ManyPuppies from './components/ManyPuppies';

function App() {
  return (
    <div className="App">
      <h1>Hello from the main page</h1>
      <Router>
        <PuppiesComp path="/puppy"/>
        <KittenComp path="/kitten"/>
        <ManyPuppies path="/:number"/>
      </Router>
    </div>
  );
}

export default App;