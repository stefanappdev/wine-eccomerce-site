import React from 'react'
import{Outlet} from 'react-router-dom'
import { useUserContext } from '../contexts/UserContext'
import Navbar from './Navbar';

const Views = () => {
  let UC=useUserContext();

  if(UC.isLoggedIn){
    
    return(
    <div> 
      <Navbar/>
      <h1>Our Products</h1>
    </div>) 
  }

else{


  return (
    <div>  
    
        <nav>
           <a href="/">Home</a>
            <a href="beers">Beers</a>
            <a href="wines">Wines</a>
            
        </nav>

        <h1>Our Products</h1>
        
        <Outlet/>


    </div>
  )
}

}

export default Views