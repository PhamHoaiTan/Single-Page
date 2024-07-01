import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Catalogue from './Pages/Catelogues/Catalogue';

function App() {
  return (
    <Routes>
      <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/catalogue" component={Catalogue} />
      </div>
    </Routes>
  );
}

export default App;
