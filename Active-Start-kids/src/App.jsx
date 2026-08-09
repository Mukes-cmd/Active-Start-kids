import React from 'react'
import Navbar from './Components/Navbar'
import PageOne from './Pages/PageOne'
import Footer from './Components/Footer'
import { Routes, Route } from "react-router-dom";

import About from './Pages/About';
import Physical from './Pages/Physical';
import ActiveStart from './Pages/ActiveStart';
import Benefits from './Pages/Benefits';
import Sports from './Pages/Sports';
import Partnership from './Pages/Partnership';
import Trust from './Pages/Trust';
import Home from './Pages/Home';

const App = () => {
  return (
  <div>
    {/* <Navbar/> */}
    {/* <PageOne/> */}
    
     <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/physical" element={<Physical/>}/>
      <Route path="/activestart" element={<ActiveStart/>}/>
      <Route path="/benefits" element={<Benefits/>}/>
      <Route path="/sports" element={<Sports/>}/>
      <Route path="/partnership" element={<Partnership/>}/>
      <Route path="/trust" element={<Trust/>}/>

     </Routes>
     <Footer/>
   
    </div>
  )
 
}

export default App