import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Users from './components/Users/Users';
import Albums from './components/Albums/Albums';
import Gallery from './components/Gallery/Gallery';

const App: React.FC = () => {
  return (
      <Router>
          <Switch>
            <Route exact path="/">
              <Users />
            </Route>
            <Route path="/albums">
              <Albums />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
          </Switch>
      </Router>
  );
}

export default App;