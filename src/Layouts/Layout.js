import React from 'react'
import Header from '../Components/Header'
import {
    BrowserRouter,
    Switch,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Home from '../Components/Home';
const Layout = () => {
  return (
    <div>
        <Header/>
        
      <Routes>
        <Route path="home" element={<Home />}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    
    </div>
  )
}

export default Layout