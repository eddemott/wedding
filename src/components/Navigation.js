import React from 'react';
import StyledLink from './StyledLink';
import styled from 'styled-components';

import * as routes from '../constants/routes';

const Navigation = () =>
<Nav>
  <ul>
      <li><StyledLink to={routes.home}>Home</StyledLink></li>
      <li><StyledLink to={routes.Accommodation}>Where to stay</StyledLink></li>
      <li><StyledLink to={routes.Activities}>What to do</StyledLink></li>
      <li><StyledLink to={routes.Wedding}>On the day</StyledLink></li>
      <li><StyledLink to={routes.Registry}>Registry</StyledLink></li>
      <li><StyledLink to={routes.RSVP}>RSVP</StyledLink></li>
  </ul>
</Nav>

const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100px;
  width: 100vw;
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