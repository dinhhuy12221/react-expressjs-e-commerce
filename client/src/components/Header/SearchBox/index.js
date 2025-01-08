import Button from '@mui/material/Button'
import { CiSearch } from "react-icons/ci";

import './index.css';
import { useState } from 'react';
import DropDown from './DropDown';

export default function SearchBox() {
  const [input, setInput] = useState('');

  const handleInput = (value) => {
    setInput(value);
  }
  console.log(input)

  return (
    <div className='header-search ms-3 me-3'>
        <div className='search-bar'>
          <input 
            type='text' 
            placeholder='Search for products...'
            value={input}
            onChange={(e) => handleInput(e.currentTarget.value)}/>
          <Button><CiSearch /></Button>
        </div>
        
          {
            input &&
            <DropDown />
          }
    </div>
  )
}
