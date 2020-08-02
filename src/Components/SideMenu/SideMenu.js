import React from 'react'
import './side-menu.css'

import BackDrop from '../BackDrop/BackDrop'

const SideMenu = (props) => {

    return(
        <>
            <BackDrop show={props.show} clicked={props.closed}/>
            <div className={`side-menu ${props.show ? 'open' : 'close'}`}  >
                <h2 className='menu-item'>Home</h2>
                <h2 className='menu-item'>About</h2>
                <h2 className='menu-item'>Services</h2>
                <h2 className='menu-item'>Brands</h2>
                <h2 className='menu-item'>Contact</h2>
                <h2 className='menu-item'>Location</h2>
            </div>
        </>
    )
}

export default SideMenu