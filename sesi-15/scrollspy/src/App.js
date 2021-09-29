import './App.css';
import Sidemenu from './components/Sidemenu'
import Content from './components/Content'
import Home from './components/Home'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="position-relative">
        <Sidemenu />
      </div >
      <div className="vh-100 w-75 float-end bg-primary d-flex p-5">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:id">
            <Content />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
