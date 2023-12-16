
import React,{ useState, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

const Login = () => {

let navigate = useNavigate();
let UC=useUserContext();


let users = [];
let targetUser = {}

const [formdata, setformdata] = useState({

  username: "",
  password: "",
})

const[Userlist,setUserlist]=useState([])
const [loginMsg, setloginMsg] = useState("");


const handleChange = (event) => {
  
  setformdata({
    ...formdata,
    [event.target.name]: event.target.value,
  });
}


const fetchUsers= async()=>{


 let resp=await fetch("http://localhost:65000/users")  
 let result=await resp.json()
 console.log(result)
 setUserlist(result)
 


}


useEffect(() => {
  setTimeout(() => {
  fetchUsers()
  console.log(Userlist)
}, 2000);

},[])


const HandleLogin=()=>{

  for (let i = 0; i < Userlist.length; i++) {
    users.push(Userlist[i])
  }

  if(formdata.username==="" || formdata.password===""){
    setloginMsg("please enter username and password")
    return
  }

 let target= users.find((user)=>{

    if(user.username===formdata.username && user.password===formdata.password){
      return user
    }

    })

    if(target===undefined||target===null){
      setloginMsg("login failed user not found,please try again")
      return
    } else{

      targetUser={...target}
    console.log(targetUser)
    UC.setWhoIsLoggedIn(targetUser.username)
    UC.setIsLoggedIn(true)
    setloginMsg("logged in successfully,redirecting you to home page")
    
    setTimeout(()=>{
       navigate("/")
    },2000)
   

    }

  }
  
  
const HandleSubmit = (event) => {
  event.preventDefault();
    HandleLogin()

  }
  
 
  
   
    




  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={HandleSubmit}>
            <label for="username">	username:</label>


      <input type="text" 
      onChange={handleChange} 
      placeholder='username' 
      id="username"
      value={formdata.username} 
      name="username"
      />
      <p></p>



      <br/>


      <label for="password">password:</label>

      <input 
      type="password"
      onChange={handleChange} 
      placeholder='password' 
      value={formdata.password} 
      id="password"
      name="password"
      />
      <p></p>


      <p>{loginMsg}</p>

      <button type="submit">Login</button>
      </form>
          </div>
        )
  
  }
  


export default Login