import React from 'react';
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';
import SinglePlant from './views/SinglePlant';
import { Router } from '@reach/router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Create path="/new" />
        <Update path="/update/:_id" />
        <SinglePlant path="/plants/:_id" />
      </Router>
    </div>
  );
}

export default App;