import React from 'react'
import './navbar.css'

const Navbar = () =>
    <div className='navbar'>
        <img width='110px' src={process.env.PUBLIC_URL + '/abaLogo.png'} />
        <div className='ham'>
            <div className='ham-line'></div>
            <div className='ham-line'></div>
            <div className='ham-line'></div>
        </div>


    </div>
export default Navbar