import styled from "styled-components";

const Link = styled.a`
  position: relative;
  text-decoration: none;
  display: inline-block;
  color: black;
  padding: 0 1px;
  transition: color ease 0.3s;
  margin: 0;

  ::before,
  ::after {
    content: "";
    position: absolute;
    background-color: #00b388;
    z-index: -1;
    height: 5%;
  }

  ::before {
    width: 0%;
    left: 0;
    bottom: 0;
    transition: width ease 0.4s;
  }

  ::after {
    width: 100%;
    left: 0;
    bottom: 0;
    transition: all ease 0.6s;
  }

  :hover::before {
    width: 100%;
  }

  :hover::after {
    left: 100%;
    width: 0%;
    transition: all ease 0.2s;
  }
`;

export default Link;
