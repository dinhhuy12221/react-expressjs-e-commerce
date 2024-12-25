import Button from '@mui/material/Button'
import { CiSearch } from "react-icons/ci";

import './index.css';

export default function SearchBox() {
  return (
    <div className='headerSearch ms-3 me-3'>
        <input type='text' placeholder='Search for products...'/>
        <Button><CiSearch /></Button>
    </div>
  )
}
