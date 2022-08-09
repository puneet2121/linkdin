import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'
function Sidebar() {
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
        <Avatar className='sidebar_avatar' />
        <h2>Puneet Kumar</h2>
        <h4>bedipuneet21@gmail.com</h4>
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