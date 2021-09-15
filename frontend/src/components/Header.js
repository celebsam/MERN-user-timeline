import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/userActions";
import { useHistory } from "react-router-dom";

const Header = () => {
   const dispatch = useDispatch();
   const history = useHistory();

   const login = useSelector((state) => state.login);

   const { userInfo } = login;

   const logoutHandler = () => {
      dispatch(logout());

      setTimeout(() => {
         history.push("/");
      }, 1000);
   };
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
               {!userInfo ? null : (
                  <LinkContainer to="/posts">
                     <Nav.Link href="/posts">Posts</Nav.Link>
                  </LinkContainer>
               )}
               {!userInfo ? null : (
                  <NavDropdown
                     title={userInfo?.firstname + " " + userInfo?.lastname}
                     id="basic-nav-dropdown"
                  >
                     <NavDropdown.Item href="#action/3.1">
                        Profile
                     </NavDropdown.Item>
                     <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                     </NavDropdown.Item>
                  </NavDropdown>
               )}
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
};

export default Header;
