import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Brands from './Components/Brands/Brands'
function App() {
  return (
    <div>
      <Layout />
      <Home />
      <About />
      <Services />
      <Brands />
    </div>
  )
}

export default App;
