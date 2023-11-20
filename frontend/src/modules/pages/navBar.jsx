import React from 'react'
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Navbar from "react-bootstrap/Navbar"

import {useAuth0} from "@auth0/auth0-react"
import LoginButton from 'modules/common/loginButton'
import LogoutButton from 'modules/common/logoutButton'


function NavBar() {

  const {user, isAuthenticated} = useAuth0()


  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
        sticky="top"
      >
        <Container>
          <Row className='navBarRow'>
            <Col>
              <Navbar.Brand href="#/"> 
                <img src="./logo.png" className="logo"></img>
            Minute Mood
              </Navbar.Brand>
            </Col>
            <Col className='navBarRight'>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav defaultActiveKey="#/">
                  <Nav.Link
                    href="#/" 
                    className='mx-3'
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link 
                    href="#/journal"
                    className='mx-3'
                  >
                    Journals
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
            <Col>
              {!isAuthenticated && <LoginButton />}
              {isAuthenticated && 
              <>
                <div className='welcome'>Welcome {user.name}!</div>
                <LogoutButton />
              </>}
            </Col>
            
          </Row>
        </Container>
      </Navbar>
      
    </>
  )
}

export default NavBar
