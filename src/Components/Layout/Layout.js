import React, { useState } from 'react'
import './layout.css'

import Navbar from '../Navbar/Navbar'
import SideMenu from '../SideMenu/SideMenu'
const Layout = (props) => {

    const [showSideMenu,setShowSideMenu] = useState(false)

    const closeSideMenu = () => {
        setShowSideMenu((prevState) => !prevState)
    }
    return(
        <>
            <Navbar hamClicked = {closeSideMenu}/>
            <SideMenu closed={closeSideMenu} show={showSideMenu} />
            {props.children}
            <div style={{backgroundColor:'black',width:'100%',height:'150px',display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
                <p style={{color:'white', textAlign:'center',margin:'0',padding:'0 80px'}}>© 2020 Designed by Carlos A. Oriol</p>
                <p style={{color:'white', textAlign:'center',margin:'0',padding:'0 80px'}}>ABA Cycle &amp; Sports</p>
            </div>
        </>
    )
}
export default Layout