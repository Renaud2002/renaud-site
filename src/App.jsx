import React from 'react';
import Navbar from './Navbar';
import Intro from './components/Intro';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import {Route, Routes} from "react-router-dom"

function App() {

  // let Component
  // switch (window.location.pathname) {
  //   case "/":
  //     Component = <Intro/>
  //     break;
  //   case "/Intro":
  //     Component = <Intro/>
  //     break;
  //   case "/Portfolio":
  //     Component = <Portfolio/>
  //     break;
  //   case "/Contact":
  //     Component = <Contact/>
  //     break;
  //   case "/Timeline":
  //     Component = <Timeline/>
  //     break;
  // }

  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Intro />}/>
          <Route path="/Intro" element={<Intro />}/>
          <Route path="/Timeline" element={<Timeline />}/>
          <Route path="/Portfolio" element={<Portfolio />}/>
          <Route path="/Contact" element={<Contact />}/>
        </Routes>
      </div>
      <Footer/>
      {/* <Intro/> */}
      {/* {Component} */}
      {/* <Portfolio/>
      <Timeline/>
      <Contact/>
      <Footer/> */}
    </div>
  )
}

export default App
