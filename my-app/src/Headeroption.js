
import React from 'react'
import './Headeroption.css'
import Avatar from '@mui/material/Avatar';
function Headeroption({onClick,avatar,title,Icon}) {
  return (
    <div onClick={onClick} className='headeroption'>
      {Icon && <Icon className="headeroption_icon" />}
      {avatar && 
        <Avatar className="headeroption_icon" src={avatar}/>}
      <h3 className='headeroption_title'>{title}</h3>

    </div>

  )
}

export default Headeroption