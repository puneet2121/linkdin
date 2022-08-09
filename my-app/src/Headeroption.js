
import React from 'react'
import './Headeroption.css'
function Headeroption({title,Icon}) {
  return (
    <div className='headeroption'>
      {Icon && <Icon className="headeroption_icon" />}
      
      <h3 className='headeroption_title'>{title}</h3>

    </div>

  )
}

export default Headeroption