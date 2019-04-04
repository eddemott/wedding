import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../containers/Navigation';
import AccommodationPage from './Accommodation';
import HomePage from './Home';
import RegistryPage from './Registry';
import RsvpPage from './RSVP';
import WeddingPage from './Wedding'

import * as routes from '../constants/routes';

const App = () =>
  <Router>
    <div>
      <Navigation />
      <Route
        exact path={routes.home}
        component={() => <HomePage />}
      />
      <Route
        exact path={routes.Accommodation}
        component={() => <AccommodationPage />}
      />
      <Route
        exact path={routes.Registry}
        component={() => <RegistryPage />}
      />
      <Route
        exact path={routes.RSVP}
        component={() => <RsvpPage />}
      />
    <Route
        exact path={routes.Wedding}
        component={() => <WeddingPage />}
      />
    </div>
  </Router>

export default App;