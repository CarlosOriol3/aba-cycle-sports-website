import React, { useState } from 'react'
import './layout.css'

import Navbar from '../Navbar/Navbar'
import SideMenu from '../SideMenu/SideMenu'
const Layout = () => {

    const [showSideMenu,setShowSideMenu] = useState(false)

    const closeSideMenu = () => {
        setShowSideMenu((prevState) => !prevState)
    }
    return(
        <>
            <Navbar hamClicked = {closeSideMenu}/>
            <SideMenu closed={closeSideMenu} show={showSideMenu} />
        </>
    )
}
export default Layout