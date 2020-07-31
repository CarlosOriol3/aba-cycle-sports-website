import React from 'react'
import './side-menu.css'

import BackDrop from '../BackDrop/BackDrop'

const SideMenu = (props) => {

    return(
        <>
            <BackDrop show={props.show} clicked={props.closed}/>
            <div className={`side-menu ${props.show ? 'open' : 'close'}`}  >
                
            </div>
        </>
    )
}

export default SideMenu