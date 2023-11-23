import React from 'react'
import { useNavigate } from 'react-router-dom'

const Success = () => {
    const navigate=useNavigate();
    const NavigateToHomePage=()=>{
        navigate('/')
    }
  return (
    <center>
      <h3>Submitted Successfully</h3>
      <button onClick={NavigateToHomePage}>Back To Home</button>
    </center>
  )
}

export default Success
