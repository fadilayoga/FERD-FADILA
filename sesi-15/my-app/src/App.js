import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Todos from './components/Todos'

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
