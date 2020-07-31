import React from 'react'
import './navbar.css'

const Navbar = (props) =>
    <div className='navbar'>
        <img width='110px' src={process.env.PUBLIC_URL + '/abaLogo.png'} alt='ABA Cycle'/>
        <div className='ham' onClick={props.hamClicked}>
            <div className='ham-line'></div>
            <div className='ham-line'></div>
            <div className='ham-line'></div>
        </div>


    </div>
export default Navbar