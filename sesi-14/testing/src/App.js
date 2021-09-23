import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Users from './components/User.js'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
