import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../containers/Navigation";
import AdditionalInfo from "./AdditionalInfo";
import HomePage from "./Home";
import RsvpPage from "./RSVP";
import WeddingPage from "./Wedding";

import * as routes from "../constants/routes";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path={routes.home} component={() => <HomePage />} />
      <Route
        exact
        path={routes.AdditionalInfo}
        component={() => <AdditionalInfo />}
      />
      <Route exact path={routes.RSVP} component={() => <RsvpPage />} />
      <Route exact path={routes.Wedding} component={() => <WeddingPage />} />
    </div>
  </Router>
);

export default App;
