import React from 'react';
import Navbar from './Navbar';
import Intro from './components/Intro';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {

  let Component
  switch (window.location.pathname) {
    case "/":
      Component = <Intro/>
      break;
    case "/Intro":
      Component = <Intro/>
      break;
    case "/Portfolio":
      Component = <Portfolio/>
      break;
    case "/Contact":
      Component = <Contact/>
      break;
    case "/Timeline":
      Component = <Timeline/>
      break;
  }

  return (
    <div className='App'>
      <Navbar/>
      {/* <Intro/> */}
      {Component}
      {/* <Portfolio/>
      <Timeline/>
      <Contact/>
      <Footer/> */}
      <Footer/>
    </div>
  )
}

export default App
