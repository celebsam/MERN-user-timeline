import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
   return (
      <Navbar style={{ padding: "1rem 2rem" }} bg="light" expand="lg">
         <LinkContainer to="/">
            <Navbar.Brand>Timeline</Navbar.Brand>
         </LinkContainer>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: "auto" }} className="ml-auto">
               <LinkContainer to="/">
                  <Nav.Link href="/">Home</Nav.Link>
               </LinkContainer>
               <LinkContainer to="/posts">
                  <Nav.Link href="/posts">Posts</Nav.Link>
               </LinkContainer>
               <NavDropdown title="Sam Green" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                     Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
               </NavDropdown>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
};

export default Header;