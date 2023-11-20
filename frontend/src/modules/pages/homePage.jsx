import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function HomePage() {
  return (

    
    <div> 
      <Container>
        <Row className="body">
          <Col className="imgCol">
            <img src="./homepage.png" className="homepageImg">
            </img> </Col>
          <Col className="rightHalf">
            <Row><h1>Get comfy and elevate your day in 5 minutes</h1></Row>
            <Row className="butRow"> 
              <Button variant="light" className="button">Let's go!</Button>
            </Row>
          </Col>
        </Row>
        
      </Container>
      
      
    </div>
  )
}
