import React from "react";
import { useUserContext } from "../contexts/UserContext";

const NeedAuth = ({children}) => {
    let UC=useUserContext();
    if (UC.isLoggedIn) {
        return children
    } 
    
    
    if(UC.isLoggedIn===false){ {
        return (<React.Fragment>
        
                <h1>Please login first</h1>
                <a href="/login">
                    <button>Login</button>
                </a>

                <br/>


                <div className="SignUp">
                  <p>Or sign Up instead?</p> 
                    <a href="/signup">
                    <button>Sign Up</button>
                    </a>
                </div>
        
        </React.Fragment>)
        
        }
}   }

export default NeedAuth