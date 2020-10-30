import React from 'react'
import './services.css'
import Service from './Service/Service'
import { Slide } from "react-awesome-reveal";
const Services = () => (
    <section>
        <div className='services-header'>
            <h1>Services</h1>
            <hr />
        </div>


        <div className='services-container'>
            <Slide direction='right' triggerOnce>
                <Service serviceTitle='Vehicles' imageUrl={process.env.PUBLIC_URL + './ServiceIcons/motorcycle.png'} imageWidth='200px'>Interested on a motorcycle or all terrain vehicle? Contact us to see if we have what you are looking for.</Service>
            </Slide>

            <Slide direction='right' triggerOnce delay={100}>
                <Service serviceTitle='Repair' imageUrl={process.env.PUBLIC_URL + './ServiceIcons/tools.png'} imageWidth='120px'>Something broke? ABA Cycle &amp; Sports brings the best service when it comes to fixing your motorcycle or all terrain vehicle.</Service>
            </Slide>

            <Slide direction='right' triggerOnce delay={200}>
                <Service serviceTitle='Accesories' imageUrl={process.env.PUBLIC_URL + './ServiceIcons/helmet.png'} imageWidth='120px'>Looking for a specific accessory? ABA cycle sells accesories of many recognizable brands.</Service>
            </Slide>

        </div>


    </section>


)

export default Services 