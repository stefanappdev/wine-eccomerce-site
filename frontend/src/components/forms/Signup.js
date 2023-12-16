import React,{useState} from "react"
import { useNavigate } from "react-router-dom"

const Signup=()=>{

	const navigate=useNavigate();
	const [errs,seterrs]=useState([])
	const[Signupmsg,setSignupmsg]=useState("")

	const[formdata,setformdata]=useState({
      

		password:"",
		email:"",
		confirmpassword:"",		
		username:""
		

		})


	const handleChange=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value});
  }


  

 /* const ValidateForm=()=>{


	//check for errors


	if(formdata.password!==formdata.confirmpassword){
		setConfirmPassword_err("passwords do not match")
		seterrs((prev)=>[...prev,ConfirmPassword_err])
		return
	}

	if(formdata.password.length<8&&formdata.confirmpassword.length>1){
		setPassword_err("password must be at least 8 characters")
		seterrs((prev)=>[...prev,Password_err])
		return
	}



	if(formdata.password.length<1&&formdata.confirmpassword.length<1&&formdata.username.length<1
		&&formdata.email.length<1){
		setEmail_err("This field cannot be empty")
		setUsername_err("This field cannot be empty")
		setPassword_err("This field cannot be empty")
		setConfirmPassword_err("This field cannot be empty")
		seterrs(prev=>[...prev,Email_err,Username_err,Password_err,ConfirmPassword_err])
		return
	}

	if(formdata.email.length<1){
		setEmail_err("This field cannot be empty")
		seterrs(prev=>[...prev,Email_err])
		return
	}

	if(formdata.username.length<1){
		setUsername_err("This field cannot be empty")
		seterrs(prev=>[...prev,Username_err])
		return
	}


	if(formdata.password.length<1){
		setPassword_err("This field cannot be empty")
		seterrs(prev=>[...prev,Password_err])
		return
	}

	if(formdata.confirmpassword.length<1){
		setConfirmPassword_err("This field cannot be empty")
		seterrs(prev=>[...prev,ConfirmPassword_err])
		return
	}



	




	if (errs.length>0){
		return false
	}else{
		return true
	}

  }*/


  const postUser= async()=>{

	/*if(!ValidateForm()){
		return
	}*/
	
	await fetch("http://localhost:65000/users",
		{
			method:"POST",
			headers:{"Content-Type":'application/json'},
			body:JSON.stringify(formdata),
		})
		.then(res=>{
			if (res.ok){
				
				setSignupmsg("user added successfully")
				console.log(res.json())
				setTimeout(()=>{
					navigate("/")
				},2000)
				
				

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
			
		
			<label for="email">email:</label>
			<input type="text" 
			onChange={handleChange} 
			placeholder='email'
			id="email" 
			value={formdata.email} 
			name="email"/>

			<p></p>

		
		<br/>

		
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

			<label for="confirmpassword">Confirm password:</label>
			
			<input 
			type="password"
			 onChange={handleChange} 
			placeholder='confirm password' 
			value={formdata.confirmpassword} 
			id="confirmpassword"
			name="confirmpassword"
			/>
			<p></p>





		

		<button>Submit</button>

	</form>

	<p>{Signupmsg}</p>

	</div>



	)

}

	


export default Signup;