import React from 'react'
import './navigation-items.css'

const NavigationItems = (props) => (
    <div className='navigation-container'>
        <ul className='navigation-items'>
            <a href='#home'><li className='navigation-item'><span>Home</span></li></a>
            <a href='#about'><li className='navigation-item'><span>About</span></li></a>
            <a href='#services'><li className='navigation-item'><span>Services</span></li></a>
            <a href='#brands'><li className='navigation-item'><span>Brands</span></li></a>
            <a href='#contact'><li className='navigation-item'><span>Contact</span></li></a>
            <a href='#location'> <li className='navigation-item'><span>Location</span></li></a>
        </ul>
    </div>

)


export default NavigationItems