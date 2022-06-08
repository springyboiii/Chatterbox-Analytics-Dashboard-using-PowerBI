// import React from 'react'
import * as React from 'react';
import { Tab,Tabs,AppBar } from '@mui/material';
// import {Navbar,Nav,Container} from 'react-bootstrap';
import { useState } from 'react';
import Graphs from '../Pages/graphs';
import Home from '../Pages/Home';
import "../Styles/tabs.css"
import Predict from '../Pages/Predict';
const Header = () => {
  const [Value, setValue] = useState(0)
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
<AppBar position="static"  color='primary' enableColorOnDark={true} className="MuiAppBar-colorSecondary">
  <Tabs value={Value} onChange={handleTabs} textColor="secondary" centered>
    {/* <Tab label="Item 1"/>

    <Tab label="Item 2"/>
    <Tab label="Item 3"/> */}
    <Tab label="Analyst" />

<Tab label="Statistics" />
  <Tab label="Graphs"  />
  <Tab label="Predict" />
  </Tabs>
</AppBar>
{Value===0&&<Home></Home>}

{Value===1&&<Home></Home>}
{Value===2&&<Graphs></Graphs>}
{Value===3&&<Predict></Predict>}

</>
  )}

export default Header