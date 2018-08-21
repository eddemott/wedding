import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import AccommodationPage from './Accommodation';
import TaxiPage from './Taxi';
import HomePage from './Home';
import RegistryPage from './Registry';

import * as routes from '../constants/routes';

const App = () =>
  <Router>
    <div>
      <Navigation />

      <hr/>

      <Route
        exact path={routes.home}
        component={() => <HomePage />}
      />
      <Route
        exact path={routes.Accommodation}
        component={() => <AccommodationPage />}
      />
      <Route
        exact path={routes.Taxi}
        component={() => <TaxiPage />}
      />
      <Route
        exact path={routes.Registry}
        component={() => <RegistryPage />}
      />
    </div>
  </Router>

export default App;