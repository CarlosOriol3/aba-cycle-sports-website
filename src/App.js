import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Brands from './Components/Brands/Brands'
import Contact from './Components/Contact/Contact'
import Location from './Components/Location/Location'
import Separator from './Components/Separator/Separator'
function App() {
  return (
    <div>
      <Layout>
        <Separator section='home' />
        <Home />
        <Separator section='about' />
        <About />
        <Separator section='services' />
        <Services />
        <Separator section='brands' />
        <Brands />
        <Separator section='contact' />
        <Contact />
        <Separator section='location' />
        <Location />
      </Layout>

    </div>
  )
}

export default App;
