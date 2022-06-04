import React from 'react'
import Header from '../Components/Header'
import {
    
    Routes,
    Route,
    
  } from "react-router-dom";
import Graphs from '../Pages/graphs';
  import Home from '../Pages/Home';
import Insights from '../Pages/Insights';
const Layout = () => {
  return (
    <div>
        <Header/>
        
      <Routes>
        <Route path="home" element={<Home />}/>
        <Route path="graphs" element={<Graphs />}/>
        <Route path="insights" element={<Insights />}/>

          
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
x        

      </Routes>
    
    </div>
  )
}

export default Layout