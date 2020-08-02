import React from 'react'
import './home.css'

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);
const Home = () => (
    <>
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
                    <div data-src={process.env.PUBLIC_URL + './SliderImages/abaSlider1.jpg'} />
                    <div data-src={process.env.PUBLIC_URL + './SliderImages/abaSlider2.jpg'} />
                    <div data-src={process.env.PUBLIC_URL + './SliderImages/abaSlider3.jpg'} />
                </AutoplaySlider>
            </div>
        </div>
    </>



)


export default Home 