import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Local imports

import Events from './pages/Events';
import EventDetails from './pages/EventDetails';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/events" />
          </Route>
          <Route exact path="/events" component={Events} />
          <Route exact path="/events/:eventId" component={EventDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
