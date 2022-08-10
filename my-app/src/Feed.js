import React, { useEffect, useState } from 'react'
import './Feed.css'
import firebase from 'firebase/compat/app';
import Post from './Post'

import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ImageIcon from '@mui/icons-material/Image';
import EventIcon from '@mui/icons-material/Event';
import Inputoption from './Inputoption';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CreateIcon from '@mui/icons-material/Create';
import { db } from './firebase';
function Feed() {
  const [input,setInput] = useState('')
  const [posts,setPosts] =useState([]);
  useEffect(() => {
    db.collection('posts')
    .orderBy("timestamp","desc")
    .onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data()
        }
      )))
    })
  },[])

  const sendPost = e => {
    e.preventDefault();
    db.collection('posts').add({
      name:'Puneet kumar',
      description:'this is a test',
      message:input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('')
  }
  return (
    <div className='feed'>
      <div className='feedinput_container'>
        <div className='feed_input'>
          <CreateIcon />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>
        <div className="feed_inputoptions">
          <Inputoption Icon={ImageIcon} title='Photo' color="blue" />
          <Inputoption Icon={SubscriptionsIcon} title='video' color="yellow" />
          <Inputoption Icon={EventIcon} title='Event' color="lightgreen" />
          <Inputoption Icon={CalendarMonthIcon} title='Write article' color="pink" />
        </div>

      </div>
      {posts.map(({id, data: {name,description,message,photUrl }}) => (
        <Post 
        key={id}
        name={name}
        description={description}
        message={message}
        photoUrl={photUrl}/>
      ))}
     
        {/* Widgets */}
    </div>
  )
}

export default Feed