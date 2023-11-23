import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Restaurents = () => {
  return (
    <>
    <div>
      Restaurents Data
    </div>
    
    <nav>
        <Link to='/Restaurents/existing'>existing</Link>
        <Link to='/Restaurents/New'>New Restaurent</Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default Restaurents
