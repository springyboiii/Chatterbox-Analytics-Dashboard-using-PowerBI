// import React from 'react'
import * as React from 'react';
import { Tab,Tabs,AppBar } from '@mui/material';
// import {Navbar,Nav,Container} from 'react-bootstrap';
import { useState } from 'react';
const Header = () => {
  const [Value, setValue] = useState( null)
  const handleTabs=(e,val)=>{
    console.log(val)
setValue(val)  }

  return (
    <>
  
  {/* <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/welcome">ANALYST</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link href="/insights">Insights</Nav.Link>

      <Nav.Link href="/home">Statistics</Nav.Link>
      <Nav.Link href="/graphs">Graphs</Nav.Link>
      <Nav.Link href="#pricing">Predict</Nav.Link>
    </Nav>
    </Container>
  </Navbar> */}
<AppBar position="static" onChange={handleTabs}>
  <Tabs value={Value} onChange={handleTabs}>
    {/* <Tab label="Item 1"/>

    <Tab label="Item 2"/>
    <Tab label="Item 3"/> */}
<Tab label="Statistics" href="/home" />
  <Tab label="Graphs" href="/graphs" />
  <Tab label="Predict" href="/predict" />
  </Tabs>
</AppBar>
  
</>
  )}

export default Header