import { IoClose } from 'react-icons/io5'
import CountrySelector from '../CountrySelector/index'
import Logo from '../../assets/images/logo.png'
import "./index.css"
import { useContext } from 'react'
import { MyContext } from '../../App'
function SiteCanvas() {
  const context = useContext(MyContext);

  return (
    <div className='site-canvas'>
      <div className='canvas-header'>
        <a href='/'><img src={Logo} alt='Logo'></img></a>
        <button className='btn close-button'><IoClose /></button>
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
