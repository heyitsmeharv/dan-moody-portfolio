import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';


const App = () => {
  return (
    <Router>
      <Route
        render={({ location }) => {
          return (
            <Switch location={location}>
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/blog" component={Blog} />
            </Switch>
          );
        }}
      />
    </Router>
  );
}

export default App;
