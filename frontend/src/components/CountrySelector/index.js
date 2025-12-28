import React, { useContext, useEffect } from 'react';
import { useState } from 'react';

import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';

import './index.css';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CountrySelector() {

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedTab, setSelectedtab] = useState(null);
  const [countryList, setCountryList] = useState([]);

  const context = useContext(MyContext);

  const selectCountry = (index, country) => {
    setSelectedtab(index);
    setIsOpenModal(false);
    context.setSelectedCountry(country);
  }

  useEffect(() => {
    setCountryList(context.countryList);
  }, [])

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    if (keyword !== "") {
      const list = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      setCountryList(list);
    }
    else {
      setCountryList(context.countryList);
    }
  }

  return (
    <>
      <button className='country-selector' onClick={() => setIsOpenModal(true)}>
          <div className='country-info'>
              <span className='country-label'>Your Location</span>
              <span className='country-name'>{context.selectedCountry !== '' ? (context.selectedCountry.length > 10 ? context.selectedCountry.substring(0, 10) + '...' : context.selectedCountry) : 'Select a location'}</span>
          </div>
          <FaAngleDown />
      </button>
      <Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)} TransitionComponent={Transition}>
        <div className='country-modal'>
          <h5 className='country-modal-label'>Choose your Delivery Country</h5>
        <p>Enter your address and we will specify the offer for your area.</p>
        <button className='btn close-button' onClick={() => setIsOpenModal(false)}><IoClose /></button>
        <div className='country-container'>
          <div className='country-search'>
            <CiSearch />
            <input type='text' placeholder='Search your area...' onChange={filterList}/>
          </div>
  
          <ul className='country-list'>
            {
              countryList.length !== 0 && countryList?.map((item, index) => {
                return (<li key={index}><button onClick={() => selectCountry(index, item.country)} className={`btn ${selectedTab === index ? 'active' : ''}`}>{item.country}</button></li>);
              })
            }
          </ul>
          </div>
        </div>
      </Dialog>
  </>
  )
}
