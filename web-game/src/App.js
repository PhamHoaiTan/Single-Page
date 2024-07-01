import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Catalogue from './Catalogue';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/catalogue" component={Catalogue} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
