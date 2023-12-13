import React,{useEffect,useState} from "react";


const Application=()=>{



const [res,setres]=useState()



const fetchData=async()=>{
	let resp=await fetch("http://localhost:5000/");
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

	<h2> data from server:{res}</h2>
	

</React.Fragment>)


}

export default Application