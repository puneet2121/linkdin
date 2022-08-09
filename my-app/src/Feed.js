import React from 'react'
import './Feed.css'
import Post from './Post'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ImageIcon from '@mui/icons-material/Image';
import EventIcon from '@mui/icons-material/Event';
import Inputoption from './Inputoption';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CreateIcon from '@mui/icons-material/Create';
function Feed() {
  return (
    <div className='feed'>
      <div className='feedinput_container'>
        <div className='feed_input'>
          <CreateIcon />
          <form>
            <input type="text" />
            <button type='submit'>Send</button>
          </form>
        </div>
        <div className="feed_inputoptions">
          <Inputoption Icon={ImageIcon} title='Photo' color="blue" />
          <Inputoption Icon={SubscriptionsIcon} title='video' color="yellow" />
          <Inputoption Icon={EventIcon} title='Event' color="lightgreen" />
          <Inputoption Icon={CalendarMonthIcon} title='Write article' color="pink" />
        </div>

      </div>
      <Post name="Puneet bedi" desc='Tis is '
        message='hg' />
        {/* Widgets */}
    </div>
  )
}

export default Feed