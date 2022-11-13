import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">

      <Router>
        <Switch>
          <Route path= "/test">
            <h1>
              Wow! Ankit
            </h1>
          </Route>
          <Route exact path= "/">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;