import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import * as routes from '../constants/routes';

const Navigation = () =>
<Nav>
  <ul>
    <li><Link to={routes.home}>Home</Link></li>
    <li><Link to={routes.Accommodation}>Accommodation</Link></li>
    <li><Link to={routes.Taxi}>Taxi's</Link></li>
    <li><Link to={routes.Registry}>Registry</Link></li>
  </ul>  
</Nav>

const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 120px;
  width: 100%;
  position: fixed;
  background: white;
  opacity: .8;

  ul {
    align-items: center;
  }

  li {
    display: inline;
    margin-left: 60px;
  }
`;

export default Navigation;