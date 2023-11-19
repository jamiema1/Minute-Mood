import React from 'react'
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
// import NavDropdown from "react-bootstrap/NavDropdown"

// import LoginButton from "../auth0/loginButton"
// import LogoutButton from "../auth0/logoutButton"
// import {useAuth0} from "@auth0/auth0-react"


function NavBar() {

  // const {user, isAuthenticated} = useAuth0()
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
        sticky="top"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="#/"> <img src="./logo.png" className="logo">
          </img>Minute Mood</Navbar.Brand>
          {/* <NavDropdown title="Profile"> */}
          {/* <NavDropdown.Item>
              <img src={user.picture} alt={user.name} />
            </NavDropdown.Item> */}

          {/* {isAuthenticated && (
              <NavDropdown.Item>Welcome {user.name}</NavDropdown.Item>
            )}
            <NavDropdown.Item href="#/profile">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            {!isAuthenticated && (
              <NavDropdown.Item>
                <LoginButton></LoginButton>
              </NavDropdown.Item>
            )}
            {isAuthenticated && (
              <NavDropdown.Item>
                <LogoutButton></LogoutButton>
              </NavDropdown.Item>
            )} */}
          {/* </NavDropdown> */}

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav defaultActiveKey="#/">
              <Nav.Link href="#/">Home</Nav.Link>
              <Nav.Link href="#/journal">Journals</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  )
}

export default NavBar
