import React from 'react'
import './navbar.css'
import NavigationItems from '../NavigationItems/NavigationItems'
const Navbar = (props) =>
    <nav className='navbar'>
        <img width='110px' src={process.env.PUBLIC_URL + '/abaLogo.png'} alt='ABA Cycle'/>
        <NavigationItems />
        <div className='ham' onClick={props.hamClicked}>
            <div className='ham-line'></div>
            <div className='ham-line'></div>
            <div className='ham-line'></div>
        </div>


    </nav>
export default Navbar