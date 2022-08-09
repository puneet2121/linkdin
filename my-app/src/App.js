import React from 'react';

import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import Feed from './Feed'
import Post from './Post'
function App() {
  return (
    <div className="app">

      {/* Header */}
      <Header />
      {/* Body */}
      <div className='app_body'>
        {/* Side Bar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
       
      </div>
      
    </div>
  );
}

export default App;
