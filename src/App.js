import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout'
import Slider from './Components/Slider/Slider'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Brands from './Components/Brands/Brands'
import Contact from './Components/Contact/Contact'
import Location from './Components/Location/Location'
import Separator from './Components/Separator/Separator'
import { Fade, Slide } from "react-awesome-reveal";
function App() {
  return (
    <div>
      <Layout>
        <Separator section='home' />
        <Fade triggerOnce>
          <Slider />
        </Fade>
        <Separator section='about' />
        <Slide triggerOnce>
          <About />
        </Slide>
        <Separator section='services' />
        <Slide direction='up' triggerOnce>
          <Fade triggerOnce>
            <Services />
          </Fade>
        </Slide>
        <Separator section='brands' />
        <Slide direction='up' triggerOnce>
          <Fade triggerOnce>
            <Brands />
          </Fade>
        </Slide>
        <Separator section='contact' />
        <Slide direction='up' triggerOnce>
          <Fade triggerOnce>
            <Contact />
          </Fade>
        </Slide>
        <Separator section='location' />
        <Slide direction='up' triggerOnce>
          <Fade triggerOnce>
            <Location />
          </Fade>
        </Slide>
      </Layout>

    </div>
  )
}

export default App;
