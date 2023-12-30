import React from "react";
import { useUserContext } from "../contexts/UserContext";
import '../../styles/UserAuth.css'


const NeedUserAuth = ({children}) => {
    let UC=useUserContext();
    if (UC.isLoggedIn) {
        return children
    } 
    
    
    if(UC.isLoggedIn===false){ {
        return (<div id="startup-page">
            <nav id="navbar">
                <div id="dropdown-menu">
                    <img src="./images/hamburger-menu.svg" alt="dropdown menu"/>
                        <div id="dropdown-content">
                            <a href="/views">
                                
                                <p>see all products </p>   
                            </a>
                            <a href="/wines">
                                
                                <p>see our wines </p>   
                            </a>
                            <a href="/beers">
                                
                                <p>see our beers </p>   
                            </a>
                        
                            
                        </div>
                </div>

                <a href="/login">
                    <p>Login</p>
                </a>

                <a href="/signup">
                    <p>Sign Up</p>
                    </a>


         
            </nav>



            <div id="main-content">

                    <h1 id="site-title">
                    <em>Welcome to In HighSpirits🍷</em>
                    </h1>

                    

               <img src="./images/logo.jpg" id="logo" alt="logo"/>
                <p><em>supplying your alcohol needs to keep you in High Spirits</em></p>



               



                <br/>
                <strong> <p id="greeting-msg"> 
                
                <a href="/login">Login</a> or <a href="/signup">Signup</a> to get started  
                
                </p> </strong>
                



            </div>
        
        
  
  


               
               
                  
               
        
        </div>)
        
        }
}   }

export default NeedUserAuth