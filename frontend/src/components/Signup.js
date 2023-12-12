import React,{useState} from "react"

const Signup=()=>{

	let id=Math.floor(Math.random()*10000000);
	
	const[formdata,setformdata]=useState({
        

		password:"",
		email:"",
		userId:`CUST${id}`,	

		})


	const handleChange=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value});
  }

	const HandleSubmit=()=>{
	fetch("http://localhost:5000/users",
		{
			method:"POST",
			headers:{"Content-Type":'application/json'},
			body:JSON.stringify(formdata),
		}

	)
	.then(resp=>{
		console.log(resp)
	})
	.catch(err=>{
		console.log(err)
	})

	}




	return(
	<form onSubmit={HandleSubmit}>
			
		<label>
			email:<input type="text" onChange={handleChange} placeholder='email' value={formdata.email} name="email"/>
		</label>
		
		<br/>

		<label>
			password:<input type="password" onChange={handleChange} placeholder='password' value={formdata.password} name="password"/>

		</label>




		

		<button>Submit</button>

	</form>



	)

}

	


export default Signup;