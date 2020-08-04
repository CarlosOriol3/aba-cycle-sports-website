import React from 'react'
import './contact.css'


const Contact = () => (
    <section className='contact'>
        <div className='contact-header'>
            <h1>Contact</h1>
            <hr />
        </div>

        <div className='contact-info-container'>
            <div className='info-item'>
                <h1>Phone</h1>
                <p><a href='tel:1-787-848-0000' className='contact-link'>(787) - 848 - 0000</a></p>
            </div>
            <div className='info-item'>
                <h1>Email</h1>
                <p><a href='mailto:abacyclesports@gmail.com' className='contact-link'>abacyclesports@gmail.com</a></p>
            </div>
            <div className='info-item'>
                <a className='fb-logo' href='https://www.facebook.com/abacyclesports' target='_blank' rel="noopener noreferrer"><img width='80px' src='https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512' alt='facebook' /></a>
            </div>

        </div>



    </section>
)

export default Contact 