import React from "react";
import StyledLink from "./StyledLink";
import styled from "styled-components";

import * as routes from "../constants/routes";

const NavContainer = styled.div`
  @media screen and (min-width: 950px) {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100px;
    width: 100vw;
    z-index: 11;
    position: fixed;
    background: -webkit-linear-gradient(
      top,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    ul {
      padding: 0px;
    }

    li {
      display: inline;
      margin: 30px;
    }

    a:hover {
      border-bottom: 3px solid #2d3a2d;
      bottom: 0;
    }
  }
`;

const MobileNav = styled.nav`
  @media screen and (max-width: 950px) {
    background: #fff;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: 11;
    transition: transform 0.75s ease-in-out;
    transform: translateY(
      ${props => {
        if (!props.mobileNavVisible) {
          return "-125%";
        }
        return "0%";
      }}
    );
    ul {
      position: fixed;
      top: 80px;
      width: 100%;
      display: block;
      margin: 0 auto;
      padding: 0;
    }
    ul li {
      display: block;
      padding: 0;
      margin: 50px 0;
      text-align: center;
    }
    ul a {
      opacity: 0.8;
    }
    div {
      position: fixed;
      top: 2vh;
      left: 5vw;
      width: 7vw;
      height: 5vh;
      img {
        height: 100%;
        width: 100%;
        z-index: 10;
      }
    }
  }
`;

const MobileNavButton = styled.div`
  display: none;
  position: fixed;
  top: 2vh;
  left: 5vw;
  width: 10vw;
  height: 5vh;
  & img {
    height: 100%;
    width: 100%;
  }
  @media screen and (max-width: 850px) {
    display: block;
  }
`;

const Close = styled.div`

  position: absolute;
  top: 0;
  left: 0;
  }
`;

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = { mobileNavVisible: false };
    this.showNav = this.showNav.bind(this);
    this.hideNav = this.hideNav.bind(this);
  }

  componentWillReceiveProps(newProps) {
    let existing = this.props;
    if (newProps.location.pathname !== existing.location.pathname) {
      this.hideNav();
    }
  }

  showNav() {
    this.setState({ mobileNavVisible: true });
  }

  hideNav() {
    this.setState({ mobileNavVisible: false });
  }

  render() {
    return (
      <NavContainer>
        <MobileNav mobileNavVisible={this.state.mobileNavVisible}>
          <ul>
            <li>
              <StyledLink to={routes.home}>Home</StyledLink>
            </li>
            <li>
              <StyledLink to={routes.Wedding}>On the day</StyledLink>
            </li>
            <li>
              <StyledLink to={routes.RSVP}>RSVP</StyledLink>
            </li>
            <li>
              <StyledLink to={routes.AdditionalInfo}>
                Additional info
              </StyledLink>
            </li>
          </ul>
          {this.state.mobileNavVisible ? (
            <Close onClick={this.hideNav}>
              <div>
                <img
                  src={require("../assets/close-button.png")}
                  alt="Hamburger"
                />
              </div>
            </Close>
          ) : null}
        </MobileNav>
        <MobileNavButton onClick={this.showNav}>
          <img
            src={require("../assets/hamburger.png")}
            className="Hamburger"
            alt="Hamburger"
          />
        </MobileNavButton>
      </NavContainer>
    );
  }
}

export default Navigation;
