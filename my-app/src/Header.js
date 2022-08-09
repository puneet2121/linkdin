import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import Headeroption from './Headeroption';
import HomeIcon from '@mui/icons-material/Home';
function Header() {
  return (
    <div className='header'>
     
      <div className='header_left'>
        <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" alt=""/>
        

      <div className='header_search'>
        {/* SearchIcon used material UI for search icon */ }
        <SearchIcon />
        <input type="text" />
        </div>

      </div>
      <div className='header_right'>
        <Headeroption Icon = {HomeIcon} />
        <Headeroption title="My Network" />
      </div>
    </div>
  )
}

export default Header