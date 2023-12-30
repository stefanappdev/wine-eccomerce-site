import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext'
import Navbar from './Navbar';
function Checkout() {
  let UC=useUserContext();
  let navigate = useNavigate();
  
  if(!UC.isLoggedIn){
    navigate("/login")
  }

  return (
    <div>
      <Navbar/>
      Checkout

    </div>
  )
}

export default Checkout