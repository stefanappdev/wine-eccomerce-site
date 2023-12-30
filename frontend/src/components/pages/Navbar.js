import react from "react";
import { useParams,Outlet } from "react-router-dom";
import "../../styles/profile.css"

const Navbar = ()=>{
    let params = useParams();
    return(
        <nav id="profile-navbar">

        <a href={`/users/${params.id}/home`}>  
            home
        </a>    

          

         <a href="/beers">  
            beers
        </a> 

        
        <a href="/wines">  
           wines
        </a> 

        <a id="shopping-cart-link" href={`/users/${params.id}/checkout`} >
         <img id="shopping-cart-icon" src="./images/shopping-cart.png" alt="checkout"/>    
        </a>
        <div id="trolley-counter">0</div>

        <a href="/">  
            <button>Logout</button>
        </a>


       
        <Outlet/>

        </nav>
    )
}


export default Navbar