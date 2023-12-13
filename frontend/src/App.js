import React from "react"
import Signup from "./components/pages/Signup"
import Login from "./components/pages/Login"
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Applcation from "./Application"

const App=()=>{

return(


<Router>
    
	<nav>
		<Link to="/signup">Signup</Link>
		<Link to="/login">Login</Link>
	</nav>

	<Routes>

	<Route path="/signup" element={<Signup/>}/>
	<Route path="/" element={<Applcation/>}/>
	<Route path="/login" element={<Login/>}/>

	</Routes>


	

</Router>
)} 


export default App