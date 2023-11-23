import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate();
  const Navigatetosuccesspage=()=>{
    navigate('/Success')
  }
  return (
    <center>
<h1>Home</h1>
      <button onClick={Navigatetosuccesspage}>Submit Form</button>
    </center>
  )
}

export default Home
