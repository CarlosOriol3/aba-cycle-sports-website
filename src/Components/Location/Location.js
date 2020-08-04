import React from 'react'
import './location.css'

const Location = () => (
    <section className='location'>
        <div className='contact-header'>
            <h1>Location</h1>
            <hr />
        </div>
        <div className='contact-info-container'>
            <div className='info-item' style={{ width: '360px' }}>
                <h1>Store</h1>
                <p style={{ fontSize: '1.1em' }}>Ave. Fagot 2930 Ponce, PR 00716</p>
            </div>
            <div className='info-item' style={{ width: '360px' }}>
                <h1>Schedule</h1>
                <p style={{ fontSize: '1.1em' }}><strong>Tuesdy to Friday:</strong> 9:00 a.m. - 5:00 p.m.</p>
                <p style={{ fontSize: '1.1em' }}><strong>Saturdays:</strong> 9:00 a.m. - 4:00 p.m.</p>
            </div>
        </div>
        <div className='location-map'>
            <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15176.898099451219!2d-66.6001039!3d18.0147808!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x436a9b26b99242f6!2sABA%20CYCLE%20%26%20SPORTS%20INC.!5e0!3m2!1ses!2spr!4v1596497707910!5m2!1ses!2spr" frameborder="0" style={{ border: '0', margin: '0', padding: '0' }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
    </section>
)


export default Location 