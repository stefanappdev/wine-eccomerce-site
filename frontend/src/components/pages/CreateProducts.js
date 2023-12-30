import React,{useState} from "react"
import { useNavigate } from "react-router-dom"

const CreateProducts=()=>{

	const navigate=useNavigate();
	const [errs,seterrs]=useState([])
	const[createNotice,setcreateNotice]=useState("")

	const[formdata,setformdata]=useState({
      

		productName:"",
		productType:"",
		description:"",		
		price:0,
		quantity:0,
		image:"",
		

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


  const postProduct= async()=>{

	/*if(!ValidateForm()){
		return
	}*/
	
	await fetch("http://localhost:65000/products",
		{
			method:"POST",
			headers:{"Content-Type":'application/json'},
			body:JSON.stringify(formdata),
		})
		.then(res=>{
			if (res.ok){
				
				
				console.log(res.json())
				setcreateNotice("product added successfully")
				setTimeout(()=>{
					navigate("/")
				},2000)
				
				

			}
		})
		.catch(err=>console.log(err))
  }


	 

	const HandleSubmit=(e)=>{

		e.preventDefault();
		postProduct();
	}




	return(

	<div>	

	<h1>Add a new product</h1>	

	<form onSubmit={HandleSubmit}>
			
		
			<label for="productName">product name:</label>
			<input type="text" 
			onChange={handleChange} 
			placeholder='Enter the product name'
			id="productName" 
			value={formdata.productName} 
			name="productName"/>

			<p></p>

		
		<br/>

		
		<label for="productType"> product type:</label>
			<select name="productType" id="productType" value={formdata.productType} onChange={handleChange}>
				<option default value="">select product type</option>
				<option default value="wines">wines</option>
				<option value="beers">beers</option>
			</select>
			{formdata.productType &&<p>Choosen product type:{formdata.productType}</p>}
			<br/>

		
		<br/>

		
		<label for="description">description:</label>
			
			<input 
			type="text"
			 onChange={handleChange} 
			placeholder='Enter product description' 
			value={formdata.description} 
			id="description"
			name="description"
			/>
			<p></p>

			<label for="image">Enter product image:</label>
			
			<input 
			type="text"
			 onChange={handleChange} 
			placeholder='paste link for image' 
			value={formdata.image} 
			id="image"
			name="image"
			/>
			<p></p>

			<label for="price">Set product price:</label>
			<input 
			type="number"
			 onChange={handleChange} 
			placeholder='enter a price' 
			value={formdata.price} 
			id="price"
			name="price"
			/>
			<p></p>


			<label for="quantity">Set product quantity:</label>
			<input 
			type="number"
			 onChange={handleChange} 
			placeholder='enter a quantity' 
			value={formdata.quantity} 
			id="quantity"
			name="quantity"
			/>
			<p></p>




		

		<button>Submit</button>

	</form>

	<p>{createNotice}</p>

	</div>



	)




	/*productName:{type:String,required:true},
    productType:{type:String,required:true},
    description:{type:String,},
    price:{type:Number,required:true},
    quantity:{type:Number,required:true},
    image:{type:String,required:true},*/ 

}

	


export default CreateProducts;