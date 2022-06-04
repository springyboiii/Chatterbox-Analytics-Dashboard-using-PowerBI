import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
const Header = () => {
  return (
    <>
  
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/home">ANALYST</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link href="/insights">Insights</Nav.Link>

      <Nav.Link href="/home">Statistics</Nav.Link>
      <Nav.Link href="/graphs">Graphs</Nav.Link>
      <Nav.Link href="#pricing">Predict</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  
</>
  )}

export default Header