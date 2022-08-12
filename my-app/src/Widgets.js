import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {
   const newArticle = (heading,subtitle) => (
    <div className='widgets_article'>
      <div className='widgets_articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets_articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
   ); 
  return (
    <div className='widgets'>
      <div className='widgets_header'>
         <h2>News</h2>
         <InfoIcon />
      </div>
      {newArticle('Twitter is now own by Elon Musk','top news of the day-7000 readers')}
      {newArticle('Russia Ukraine War','top news of the day-5700 readers')} 
      {newArticle('Bitcoin hits all time high','top news of the day-5000 readers')}  
      {newArticle('Punjab kings lift the trophy of Ipl 2023 ','top news of the day-8210 readers')} 
    </div>
  )
}

export default Widgets