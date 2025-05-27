import React from 'react'
import Logo from '../../assets/img/header_logo.svg'
import Map from '../../assets/img/header_first.svg'
import Search from '../../assets/img/header_second.svg'
import User from '../../assets/img/header_third.svg'
import Cart from '../../assets/img/header_fourth.svg'

const Nav = () => {
    return (
        <div className="Nav_wrap">
           <img src={Logo} alt="Logo" className='logo' />
           <ul>
                <li>WOMEN</li>
                <li>MEN</li>
                <li>KIDS</li>
                <p>|</p>
                <li>TENNIS</li>
                <li>BRAND</li>
            </ul>
            <div className="nav_btns">
                <img src={Map} alt="Map" className='nav_btn' />
                <img src={Search} alt="Search" className='nav_btn' />
                <img src={User} alt="User" className='nav_btn' />
                <img src={Cart} alt="Cart" className='nav_btn' />
            </div>
        </div>
    )
}

export default Nav
