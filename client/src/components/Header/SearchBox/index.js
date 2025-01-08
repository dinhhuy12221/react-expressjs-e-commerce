import Button from '@mui/material/Button'
import { CiSearch } from "react-icons/ci";
import { useEffect, useRef, useState } from 'react';

import './index.css';
import DropDown from './DropDown';

export default function SearchBox() {
  const [input, setInput] = useState('');
  const [resultShow, setResultShow] = useState(false);
  const searchResultRef = useRef(null);

  const handleInput = (value) => {
    setInput(value);
    value ? setResultShow(true) : setResultShow(false);
  }
  
  useEffect(() => {
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event) {
            if (searchResultRef.current && !searchResultRef.current.contains(event.target)) {
              setResultShow(false);
            } else {
              setResultShow(true);
            }
          }
          // Bind the event listener
          document.addEventListener("click", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("click", handleClickOutside);
          };
        }, [searchResultRef]);

  return (
    <div className='header-search ms-3 me-3'
      ref={searchResultRef}>
        <div className='search-bar'>
          <input 
            type='text' 
            placeholder='Search for products...'
            spellCheck={false}
            value={input}
            onChange={(e) => handleInput(e.currentTarget.value)}/>
          <Button><CiSearch /></Button>
        </div>
        
          {
            resultShow &&
            <div>
              <DropDown />
            </div>
          }
    </div>
  )
}
