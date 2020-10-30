import React from 'react'
import './home.css'

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import img1 from '../../Images/img1.jpg'
import img2 from '../../Images/img2.jpg'
import img3 from '../../Images/img3.jpg'

const AutoplaySlider = withAutoplay(AwesomeSlider);
const Home = () => (
    <section>
        <div className='home-header'>
            <h1>ABA Cycle &amp; Sports</h1>
            <hr />
        </div>

        <div className='slider-container'>
            <div className='slider'>
                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={6000}
                >
                    <div data-src={img3}/>
                    <div data-src={img2} />
                    <div data-src={img1} />
                </AutoplaySlider>
            </div>
        </div>
    </section>



)


export default Home 