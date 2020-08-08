import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Route
        render={({ location }) => {
          return (
            <Switch location={location}>
              <Route path="/" component={Home} />
            </Switch>
          );
        }}
      />
    </Router>
  );
}

export default App;
