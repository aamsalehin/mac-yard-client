import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
const NavB = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logOut = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://img.freepik.com/free-vector/blank-screen-laptop-gadget-icon-isolated-white-background_1308-46353.jpg?t=st=1652351006~exp=1652351606~hmac=1d01838110133287090223da45b8dc815dce464e5c51a5a2fd915965ec4f0046&w=1480"
            width="30"
            height="30"
            className="d-inline-block align-top me-3"
            alt="React Bootstrap logo"
          />
          Mac-yard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs">
              Blogs
            </Nav.Link>
            {user ? (
              <>
                <Nav.Link as={Link} to="/additem">
                  Add item
                </Nav.Link>
                <Nav.Link as={Link} to="/myitem">
                  My Items
                </Nav.Link>
                <Nav.Link as={Link} to="/manageinventory">
                  Manage Inventory
                </Nav.Link>
              </>
            ) : (
              ""
            )}
            {!user ? (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  SignUp
                </Nav.Link>
              </>
            ) : (
              <button onClick={logOut} className="btn btn-primary text-white">
                Sign Out
              </button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavB;
