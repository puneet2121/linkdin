import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/user/userSlice'
import './Sidebar.css'
function Sidebar() {

  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className='sidebar_recentItem'>
      <span className='sidebar_hash'>#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <div className="sidebar">
      <div className='sidebar_top'>
        <img src='https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616__480.jpg' alt=''/>
        <Avatar src={user.photoUrl} className='sidebar_avatar' >{user.email[0].toUpperCase()} </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className='sidebar_stats'>
        <div className='sidebar_stat'>
          <p>Who viewed your profile</p>
          <p className='sidebar_number'>2500</p>
        </div>
        <div className='sidebar_stat'>
        <p>views on your post</p>
          <p className='sidebar_number'>2400</p>
          </div>
      </div>
      <div className='sidebar_bottom'>
        <p>Recent</p>
        {recentItem('reactJs')}
        {recentItem('javascript')}
        {recentItem('angular')}
        {recentItem('programming')}
        {recentItem('hardware')}
      </div>
    </div>

  )
}

export default Sidebar