import React,{useState} from "react"

const Signup=()=>{

	
	
	const[formdata,setformdata]=useState({
        

		password:"",
		email:"",
		username:""
		

		})


	const handleChange=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value});
  }

  const postUser= async()=>{
	 await fetch("http://localhost:5000/users",
		{
			method:"POST",
			headers:{"Content-Type":'application/json'},
			body:JSON.stringify(formdata),
		})
		.then(res=>{
			if (res.ok){
				
				console.log("user added successfully")
				console.log(res.json())
				

			}
		})
		.catch(err=>console.log(err))
  }

	const HandleSubmit=(e)=>{

		e.preventDefault();
		postUser();
	}




	return(

	<div>	

	<h1>Signup Page</h1>	

	<form onSubmit={HandleSubmit}>
			
		<label>
			email:
			<input type="text" 
			onChange={handleChange} 
			placeholder='email' 
			value={formdata.email} 
			name="email"/>
		</label>
		
		<br/>

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

	</div>



	)

}

	


export default Signup;