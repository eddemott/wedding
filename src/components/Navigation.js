import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as routes from '../constants/routes';

const Navigation = () =>
<Nav>
  <ul>
      <li><Link to={routes.home}>Home</Link></li>
      <li><Link to={routes.Accommodation}>Where to stay</Link></li>
      <li><Link to={routes.Activities}>What to do</Link></li>
      <li><Link to={routes.Wedding}>On the day</Link></li>
      <li><Link to={routes.Registry}>Registry</Link></li>
      <li><Link to={routes.RSVP}>RSVP</Link></li>
  </ul>
</Nav>

const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100px;
  width: 100%;
  position: fixed;
  background: white;
  opacity: .8;

  div {
    border-bottom: 3px;
    border-bottom-color: black;
  }

  ul {
    padding: 0px;
  }

  li {
    display: inline;
    margin: 30px;

  }
`;

export default Navigation;