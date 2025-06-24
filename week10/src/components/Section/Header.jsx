import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '../../assets/img/Header/ic_menu.svg'
import Logo from '../../assets/img/Header/ic_logo.svg'
import SearchIcon from '../../assets/img/Header/ic_search.svg'
import Shoppingbag from '../../assets/img/Header/ic_shoppingbag.svg'
import Menu from './Menu'
import Search from './Search'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className='Header_wrap'>
        <div className="menu" onClick={() => setShowMenu(true)}>
          <img src={MenuIcon} alt="MenuIcon" />
        </div>
        <div className="logo">
          <img src={Logo} alt="Logo" onClick={() => navigate('/')} />
        </div>
        <div className="search" onClick={() => setShowSearch(true)}>
          <img src={SearchIcon} alt="SearchIcon" />
        </div>
        <div className="shopbag">
          <img src={Shoppingbag} alt="Shoppingbag" onClick={() => navigate('/checkout')} />
        </div>
      </div>

      {showMenu && <Menu onClose={() => setShowMenu(false)} />}
      {showSearch && <Search onClose={() => setShowSearch(false)} />}
    </>
  )
}

export default Header
