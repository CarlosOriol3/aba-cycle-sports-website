import React from 'react'
import './service.css'


const Service = (props) => (
    <div className='service-container'>
        <img src={props.imageUrl} alt='service' width={props.imageWidth} />
        <div>
            <h1>{props.serviceTitle}</h1>
            <p>{props.children}</p>
        </div>
    </div>
)


export default Service 