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
    case "/renaud-site/":
      Component = <Intro/>
      break;
    case "/renaud-site/Intro":
      Component = <Intro/>
      break;
    case "/renaud-site/Portfolio":
      Component = <Portfolio/>
      break;
    case "/renaud-site/Contact":
      Component = <Contact/>
      break;
    case "/renaud-site/Timeline":
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
