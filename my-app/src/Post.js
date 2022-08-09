import { Avatar } from '@mui/material'
import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import Inputoption from './Inputoption'
import './Post.css'
import SendIcon from '@mui/icons-material/Send';
import IosShareIcon from '@mui/icons-material/IosShare';
function Post({ name, desc, message, photoUrl }) {
  return (
    <div className='post'>
      <div className='post_header'>
        <Avatar />
        <div className='post_info'>
          <h2>Puneet Bedi</h2>
          <p>desciption</p>
        </div>
      </div>
      <div className='post_body'>
        <p>Message goes here</p>
      </div>
      <div className='post_bottom'>
        <Inputoption Icon={ThumbUpIcon} title="like"/>
        <Inputoption Icon={CommentIcon} title="comment" />
        <Inputoption Icon={IosShareIcon} title="share" />
        <Inputoption Icon={SendIcon} title="send" />
      </div>
    </div>
  )
}

export default Post