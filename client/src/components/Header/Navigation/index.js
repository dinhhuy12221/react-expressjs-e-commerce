import { MdMenu } from "react-icons/md";
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi2";
import { FaAngleRight } from "react-icons/fa6";

import { Link } from 'react-router-dom'
import { useState } from "react";

import './index.css'

export default function Navigation() {

    const [isOpenSidebarVal, setIsOpenSidebarVal] = useState(false);

  return (
    <nav>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-2 navPart1'>
                    <div className="catWrapper">
                        <Button className='allCatTab align-items-center' onClick={() => setIsOpenSidebarVal(!isOpenSidebarVal)}>
                            <span className='text'>
                                <MdMenu className="icon"/>
                                CATEGORIES
                                </span>
                        </Button>
                        <div className={`sidebarNav ${isOpenSidebarVal === true ? 'open' : ''}`}>
                            <ul>
                                <li><Link to='/'><Button>Men<FaAngleRight className="ms-auto"/></Button></Link>
                                    <div className="submenu">
                                        <Link to='/'><Button>clothing</Button></Link>
                                        <Link to='/'><Button>footwear</Button></Link>
                                        <Link to='/'><Button>watches</Button></Link>
                                        <Link to='/'><Button>clothing</Button></Link>
                                        <Link to='/'><Button>footwear</Button></Link>
                                    </div>
                                </li>
                                <li><Link to='/'><Button>Women<FaAngleRight className="ms-auto"/></Button></Link>
                                    <div className="submenu">
                                        <Link to='/'><Button>clothing</Button></Link>
                                        <Link to='/'><Button>footwear</Button></Link>
                                        <Link to='/'><Button>watches</Button></Link>
                                        <Link to='/'><Button>clothing</Button></Link>
                                        <Link to='/'><Button>footwear</Button></Link>
                                    </div>
                                </li>
                                <li><Link to='/'><Button>Beauty</Button></Link></li>
                                <li><Link to='/'><Button>Watches</Button></Link></li>
                                <li><Link to='/'><Button>Kids</Button></Link></li>
                                <li><Link to='/'><Button>Gifts</Button></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-sm-9 navPart2 d-flex align-items-center'>
                    <ul className="list list-inline ms-auto">
                        <li className="list-inline-item">
                            <Link to='/'><Button>Home</Button></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to='/'><Button>Men</Button></Link>
                            <div className="submenu shadow">
                                <Link to='/'><Button>clothing</Button></Link>
                                <Link to='/'><Button>footwear</Button></Link>
                                <Link to='/'><Button>watches</Button></Link>
                                <Link to='/'><Button>clothing</Button></Link>
                                <Link to='/'><Button>footwear</Button></Link>
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <Link to='/'><Button>Women</Button></Link>
                            <div className="submenu shadow">
                                <Link to='/'><Button>clothing</Button></Link>
                                <Link to='/'><Button>footwear</Button></Link>
                                <Link to='/'><Button>watches</Button></Link>
                                <Link to='/'><Button>clothing</Button></Link>
                                <Link to='/'><Button>footwear</Button></Link>
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <Link to='/'><Button>Beauty</Button></Link>
                            <div className="submenu shadow">
                                <Link to='/'><Button>clothing</Button></Link>
                                <Link to='/'><Button>footwear</Button></Link>
                                <Link to='/'><Button>watches</Button></Link>
                                <Link to='/'><Button>clothing</Button></Link>
                                <Link to='/'><Button>footwear</Button></Link>
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <Link to='/'><Button>Watches</Button></Link>
                            <div className="submenu shadow">
                                <Link to='/'><Button>clothing</Button></Link>
                                <Link to='/'><Button>footwear</Button></Link>
                                <Link to='/'><Button>watches</Button></Link>
                                <Link to='/'><Button>clothing</Button></Link>
                                <Link to='/'><Button>footwear</Button></Link>
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <Link to='/'><Button>Kids</Button></Link>
                            <div className="submenu shadow">
                                <Link to='/'><Button>clothing</Button></Link>
                                <Link to='/'><Button>footwear</Button></Link>
                                <Link to='/'><Button>watches</Button></Link>
                                <Link to='/'><Button>clothing</Button></Link>
                                <Link to='/'><Button>footwear</Button></Link>
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <Link to='/'><Button>Gift</Button></Link>
                            <div className="submenu shadow">
                                <Link to='/'><Button>clothing</Button></Link>
                                <Link to='/'><Button>footwear</Button></Link>
                                <Link to='/'><Button>watches</Button></Link>
                                <Link to='/'><Button>clothing</Button></Link>
                                <Link to='/'><Button>footwear</Button></Link>
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <Link to='/'><Button>Blog</Button></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to='/'><Button>Contact</Button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}
