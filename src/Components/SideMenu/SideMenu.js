import React from 'react'
import './side-menu.css'

import BackDrop from '../BackDrop/BackDrop'

const SideMenu = (props) => {

    return (
        <>
            <BackDrop show={props.show} clicked={props.closed} />
            <div className={`side-menu ${props.show ? 'open' : 'close'}`}  >
                <a href='#home'><h2 className='menu-item'>Home</h2></a>
                <a href='#about'><h2 className='menu-item'>About</h2></a>
                <a href='#services'><h2 className='menu-item'>Services</h2></a>
                <a href='#brands'><h2 className='menu-item'>Brands</h2></a>
                <a href='#contact'><h2 className='menu-item'>Contact</h2></a>
                <a href='#location'><h2 className='menu-item'>Location</h2></a>






            </div>
        </>
    )
}

export default SideMenu