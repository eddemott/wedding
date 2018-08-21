import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Navigation = () =>
  <div>
    <ul>
      <li><Link to={routes.home}>Home</Link></li>
      <li><Link to={routes.Accommodation}>Accommodation</Link></li>
      <li><Link to={routes.Taxi}>Taxi's</Link></li>
      <li><Link to={routes.Registry}>Registry</Link></li>
    </ul>
  </div>

export default Navigation;