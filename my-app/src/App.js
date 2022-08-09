import React from 'react';

import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import Feed from './Feed'
function App() {
  return (
    <div className="app">
     
      {/* Header */}
      <Header />
      {/* Body */}
      <div className='app_body'>
        {/* Side Bar */ }
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
      </div>
      
      
      {}
    </div>
  );
}

export default App;
