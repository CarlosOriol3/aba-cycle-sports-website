import React from 'react'
import './services.css'
import Service from './Service/Service'

const Services = () => (
    <>
        <div className='services-header'>
            <h1>Services</h1>
            <hr />
        </div>


        <div className='services-container'>
            <Service serviceTitle='Vehicles' imageUrl={process.env.PUBLIC_URL + './ServiceIcons/motorcycle.png'} imageWidth='200px'>dsd</Service>
            <Service serviceTitle='Repair' imageUrl={process.env.PUBLIC_URL + './ServiceIcons/tools.png'} imageWidth='120px'>dsd</Service>
            <Service serviceTitle='Accesories' imageUrl={process.env.PUBLIC_URL + './ServiceIcons/helmet.png'} imageWidth='120px'>dsd</Service>
        </div>


    </>


)

export default Services 