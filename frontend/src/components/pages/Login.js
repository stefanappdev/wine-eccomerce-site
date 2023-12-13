import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login=()=>{

    let navigate=useNavigate();
  

     const [Users,setUsers]=useState([])
     const [formdata,setformdata]=useState({

        password:"",
        username:""
     })

    const handleChange=(e)=>{
       
        
        setformdata({...formdata,[e.target.name]:e.target.value});
    }

     const fetchUsers=async()=>{
             let resp= await fetch("http://localhost:5000/users")
             let users= await resp.json();
              setUsers(users)
        }



    const HandleSubmit=(e)=>{
        e.preventDefault();

        setTimeout(()=>{
            fetchUsers();
            console.log("users fetched successfully")
        },1000)
        
        
            
        console.log(Users)
            let target=Users.map(user=>{
                        if (user.password===formdata.password && user.username===formdata.username){
                            return user
                        }
                })
            if(target!==null){
                console.log("user found")
                navigate("/")
            }
        
    }

    return(<React.Fragment>

        <h1>Login Page</h1>

    <form onSubmit={HandleSubmit}>
			
		

		<label>
			username:
			<input type="text" 
			onChange={handleChange} 
			placeholder='username' 
			value={formdata.username} name="username"
			/>

		</label>

		
		<br/>

		
		<label>
			password:
			<input 
			type="password"
			 onChange={handleChange} 
			placeholder='password' 
			value={formdata.password} 
			name="password"
			/>

		</label>

        <button>Submit</button>

    </form>





    </React.Fragment>)
}



export default Login