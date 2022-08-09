import React from 'react'
import './Inputoption.css'
function Inputoption({Icon,title,color}) {
  return (
    <div className='inputoption'>
      <Icon style={{color: color}}/>
      <h4>{title}</h4>

    </div>
  )
}

export default Inputoption