import React from 'react';

import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import Feed from './Feed';
import Login from './Login'
import { selectUser } from './features/user/userSlice';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="app">

      <Header />
      {!user ? (
        <Login />

      ) : (
        <div className='app_body'>
          <Sidebar />
          {/* Feed */}
          <Feed />

        </div>

      )
      }


    </div >
  );
}

export default App;
