import React from 'react'
import { useLocation } from 'react-router-dom'

const CardDetails = () => {

const {state:{a}}= useLocation()

  return (
    <div className='container text-center mt-4'>
    
    <div>
      <h3>{a.name}</h3>
      <img src={a.img} alt="" width="400px" />
      <h3>{a.text}</h3>
      <h4 className='text-danger'>{a.yorum}</h4>


    </div>
    </div>
  )
}

export default CardDetails