import { IoClose } from 'react-icons/io5'
import Logo from '../../assets/images/logo.png'
import "./index.css"
function SiteCanvas() {
  return (
    <div className='site-canvas'>
      <div className='canvas-header'>
        <a href='/'><img src={Logo} alt='Logo'></img></a>
        <button className='btn'><IoClose /></button>
      </div>
      <div className='canvas-main'></div>
      <div className='canvas-footer'></div>
    </div>
  )
}

export default SiteCanvas
