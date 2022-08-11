
import React from 'react'
import './Headeroption.css'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';
function Headeroption({onClick, avatar ,title,Icon}) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className='headeroption'>
      {Icon && <Icon className="headeroption_icon" />}
      {avatar && 
        <Avatar className="headeroption_icon" src={user?.photoUrl}>{user?.email[0]}</Avatar>}
      <h3 className='headeroption_title'>{title}</h3>

    </div>

  )
}

export default Headeroption