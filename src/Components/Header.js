import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
const Header = () => {
  return (
    <>
  
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/home">ANALYST</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="#features">Graphs</Nav.Link>
      <Nav.Link href="#pricing">Predict</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  
</>
  )}

export default Header