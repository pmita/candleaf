import React from 'react';
// ROUTER
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// PAGES
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
// COMPONENTS
import Navigation from './shared/Navigation/component';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' exact component={Products} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
