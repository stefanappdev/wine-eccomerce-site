import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import Navbar from "./Navbar";


const UserHome=()=>{
let UC=useUserContext();
let navigate = useNavigate();

if(!UC.isLoggedIn){

	navigate("/login")
}

const name=UC.whoIsLoggedIn


const [res,setres]=useState()



const fetchData=async()=>{
	let resp=await fetch("http://localhost:65000/");
	return await resp.json()
	
	
}

useEffect(()=>{

	setTimeout(()=> {
		fetchData()
		.then(result=>{
		  setres(result.data)
		  //console.log(res)
		})

	},2000)


},[])




  //console.log(res)
 console.log(UC.isLoggedIn)


return(

UC.isLoggedIn?
<React.Fragment>
	<Navbar/>
	<h1>Welcome {name}</h1>
	<h2> data from server:{res}</h2>
</React.Fragment>:<h1>please login first</h1>)


}

export default UserHome