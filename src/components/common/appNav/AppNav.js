import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./appNav.sass";

class AppNav extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect className="navbar navbar-default custom-nav">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Demo App</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={2} href="#">
              Login
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default AppNav;