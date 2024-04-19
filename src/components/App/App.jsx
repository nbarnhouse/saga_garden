import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Garden from '../Garden/Garden.jsx';
import GardenDetails from '../GardenDetails/GardenDetails.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Your Garden!</h1>
      </header>

      <Router>
        <Route exact path="/">
          <Garden />
        </Route>

        <Route exact path="/plants">
          <GardenDetails />
        </Route>
      </Router>
    </div>
  );
}

export default App;
