import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'


const ViewOneBeer = () => {
  let Params = useParams()
  let navigate = useNavigate()
  const [Productlist,setProductlist]=useState([])
  let Allproducts=[]


  const fetchProducts= async()=>{
    let resp=await fetch(`http://localhost:65000/products/`)  
    let result=await resp.json()
   // console.log(result)
    setProductlist(result)
    
    }



    useEffect(()=>{
      setTimeout(()=>{
           fetchProducts()
           
        },500)
    },[])

    Allproducts=[...Productlist]
    //console.log("Allproducts:",Allproducts)


    const Beer=Allproducts.map(product=>{

      
      
     if(product.productType==="beers"&&product._id===Params.id){
       return <div className="beer-card" key={product._id}>
            <img src={product.image==="NOIMG"?"No image available":product.image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{product.productName}</h5>
              <p className="card-text">Id:{product._id}</p>
              <p className="card-text">description:{product.description!==""?product.description:"No description available"}</p>
              <p>price:${product.price}</p>
               
            </div>
        </div>
     }
    
  })

  return (
    <div>
       
        <h1>product details</h1>
        {Beer}


        <button onClick={() => navigate(-1)}>Back</button>
      </div>
  )
}

export default ViewOneBeer