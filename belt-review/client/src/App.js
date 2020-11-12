import './App.css';
import Main from './views/Main';
import OneCreature from './views/OneCreature';
import NewCreature from './views/NewCreature';
import UpdateCreature from './views/UpdateCreature';
import Random from './views/Random';
import { Router, Link } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <h1>Welcome to Plenty O Creatures!</h1>
        <Link to="/"><h4 className="navig">Home</h4></Link>&nbsp;|&nbsp;
        <Link to="/new"><h4 className="navig">Create</h4></Link>&nbsp;|&nbsp;
        <Link to="/creatures/random"><h4 className="navig">I'm feeling lucky</h4></Link>
      </div>
      <Router>
        <Main path="/"/>
        <OneCreature path="/creatures/:_id"/>
        <NewCreature path="/new"/>
        <UpdateCreature path="/creatures/update/:_id"/>
        <Random path="/creatures/random"/>
      </Router>
    </div>
  );
}

export default App;
