import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import WorkIcon from '@mui/icons-material/Work';
import Headeroption from './Headeroption';
import MessageIcon from '@mui/icons-material/Message';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/user/userSlice';
function Header() {
  const dispatch = useDispatch();

  const logoutApp = () => {
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className='header'>
     
      <div className='header_left'>
        <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" alt=""/>
        

      <div className='header_search'>
        {/* SearchIcon used material UI for search icon */ }
        <SearchIcon />
        <input placeholder="Search" type="text" />
        </div>

      </div>
      <div className='header_right'>
        <Headeroption Icon = {HomeIcon} title="Home" />
        <Headeroption Icon={AccountBoxIcon } title="My Network" />
        <Headeroption Icon={WorkIcon} title="Jobs" />
        <Headeroption Icon={MessageIcon} title="Message" />
        <Headeroption Icon={NotificationsIcon} title="Notifications" />
        <Headeroption avatar="https://filmfare.wwmindia.com/content/2022/jun/brahmastra11654934263.jpg" 
        title="Me"
        onClick={logoutApp} />
      </div>
    </div>
  )
}

export default Header