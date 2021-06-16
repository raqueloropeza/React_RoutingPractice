import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home.js';
import Word from './components/Word.js';
import Rainbow from './components/Rainbow';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Home path ="/home/"></Home>
          <Word path = "/:value/"></Word>
          <Rainbow path = "/:word/:text/:background/"></Rainbow>

      </Router>
    </div>
  );
}

export default App;
