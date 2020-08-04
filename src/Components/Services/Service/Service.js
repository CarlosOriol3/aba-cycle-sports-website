import React from 'react'
import './service.css'


const Service = (props) => (
    <section className='service-container'>
        <img src={props.imageUrl} alt='service' width={props.imageWidth} />
        <div>
            <h1>{props.serviceTitle}</h1>
            <hr />
            <div className='service-content'>{props.children}</div>
        </div>
    </section>
)


export default Service 