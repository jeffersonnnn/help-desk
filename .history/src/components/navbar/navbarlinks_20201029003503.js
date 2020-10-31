import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  @media (max-width: 768px) {
    padding: 20px 40px;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem className="navlink" to="/">Documentation</NavItem>
      <NavItem className="navlink" to="/support">Support</NavItem>
      <NavItem className="navbutton" to="/">Login</NavItem>
      <NavItem className="navbutton" to="/404">Signup</NavItem>
    </>
  )
}

export default NavbarLinks