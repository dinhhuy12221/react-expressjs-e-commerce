import React from "react";

import { IoClose } from 'react-icons/io5'
import CountrySelector from '../CountrySelector/index'
import Logo from '../../assets/images/logo.png'
import { useContext } from 'react'
import { MyContext } from '../../App'
import "./index.css"

function SiteCanvas({ open, onClose }) {
  const context = useContext(MyContext);

  return (
    <aside className={`site-canvas ${open && 'site-canvas-display'}`}>
      <div className='canvas-header'>
        <a href='/'><img src={Logo} alt='Logo'></img></a>
        <button className='btn close-button' onClick={onClose}><IoClose /></button>
      </div>
      <div className='canvas-main'>
        {
          context.countryList.length !== 0 && (<CountrySelector />)
        }
      </div>
      <div className='canvas-footer'></div>
    </aside>
  )
}

export default SiteCanvas
