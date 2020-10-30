import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BikeListing from './components/BikeListing.js';

function App() {
  return (
    <div className="App bg-light">
      <BikeListing  make="trek" name="my touring bike" model="520" style="touring"/>
      <BikeListing name="Lucy" make="Specialized" model="Secteur Sport" style="road"/>
      <BikeListing name="my road bike" make="Raleigh" model="Carlton" style="road"/>
    </div>
  );
}

export default App;
