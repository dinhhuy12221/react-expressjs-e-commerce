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

export default function CountryDropDown() {

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
      <Button className='countryDrop' onClick={() => setIsOpenModal(true)}>
          <div className='info d-flex flex-column'>
              <span className='label'>Your Location</span>
              <span className='name'>{context.selectedCountry !== '' ? (context.selectedCountry.length > 10 ? context.selectedCountry.substring(0, 10) + '...' : context.selectedCountry) : 'Select a location'}</span>
          </div>
          <span className='ms-auto'><FaAngleDown /></span>
      </Button>
      <Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)} TransitionComponent={Transition} className='locationModal'>
        <h3 className='mb-0'>Choose your Delivery Location</h3>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className='close_' onClick={() => setIsOpenModal(false)}><IoClose /></Button>
        <div className='headerSearch w-100'>
          <input type='text' placeholder='Search your area...' onChange={filterList}/>
          <Button><CiSearch /></Button>
        </div>

        <ul className='countryList mt-3'>
          {
            countryList.length !== 0 && countryList?.map((item, index) => {
              return (<li key={index}><Button onClick={() => selectCountry(index, item.country)} className={`${selectedTab === index ? 'active' : ''}`}>{item.country}</Button></li>);
            })
          }
        </ul>
      </Dialog>
  </>
  )
}
