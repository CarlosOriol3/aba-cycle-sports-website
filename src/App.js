import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Brands from './Components/Brands/Brands'
import Contact from './Components/Contact/Contact'
import Location from './Components/Location/Location'
function App() {
  return (
    <div>
      <Layout />
      <Home />
      <About />
      <Services />
      <Brands />
      <Contact />
      <Location />
    </div>
  )
}

export default App;
