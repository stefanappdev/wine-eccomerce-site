import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext'
import Navbar from './Navbar';
function Checkout() {
  let UC=useUserContext();
  let navigate = useNavigate();
  
  const redirect=()=>{
    let msg="Please Login,redirecting you to login page"
  
    if(UC.isLoggedIn===false){
      <h1>{msg}</h1>
      setTimeout(()=>{
        
        navigate("/login")
      },2000)
    }
  }


  

  return (
     UC.isLoggedIn?<React.Fragment>
      <Navbar/>
          <div>
        
          Checkout

        </div>
      </React.Fragment>:redirect()
    
  )
}

export default Checkout