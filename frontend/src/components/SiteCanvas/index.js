import { IoClose } from 'react-icons/io5'
import CountrySelector from '../CountrySelector/index'
import Logo from '../../assets/images/logo.png'
import "./index.css"
import { useContext, useState } from 'react'
import { MyContext } from '../../App'
function SiteCanvas({ open, onClose }) {
  const context = useContext(MyContext);
  if (!open) return null;

  return (
    <div className={`site-canvas ${open && 'site-canvas-display'}`}>
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
    </div>
  )
}

export default SiteCanvas
