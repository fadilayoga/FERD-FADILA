import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './pages/Navbar.js'
import Home from './pages/Home.js'
import Users from './pages/User.js'

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
