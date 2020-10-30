import React from 'react'
import './about.css'

const About = () => (
    <>
        <section className='about'>
            <div className='image-container'>
                <img className='about-img'  src={process.env.PUBLIC_URL + './abaLogo.png'} alt='ABA Cycle and Sports'/>
            </div>
            <div className='about-item'>
                <h1>About</h1>
                <hr />
                <p>
                    ABA Cycle &amp; Sports is a motorcycle, repair and accesory shop located in Ponce, Puerto Rico. It was founded by Carlos Santiago in 2016 with the mission to provide the best customer service and experience possible.
                </p>
            </div>

        </section>
    </>
)

export default About