import React from 'react'
import './back-drop.css'

const BackDrop = (props) => props.show ? <div className='back-drop' onClick={props.clicked}></div> : null

export default BackDrop