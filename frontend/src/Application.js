import React,{useEffect,useState} from "react";
import { useUserContext } from "./components/contexts/UserContext";
import Navbar from "./components/pages/Navbar";


const Application=()=>{
let UC=useUserContext();


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
		  console.log(res)
		})

	},2000)


},[])




  console.log(res)


return(

<React.Fragment>
	<Navbar/>
	<h1>Welcome {UC.whoIsLoggedIn}</h1>
	<h2> data from server:{res}</h2>
	

</React.Fragment>)


}

export default Application