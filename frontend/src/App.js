import React from "react"
import Signup from "./components/forms/Signup"
import Login from "./components/forms/Login"
import {BrowserRouter as Router,Routes,Route,Link,useNavigate} from "react-router-dom"
import { UserContextProvider,useUserContext } from "./components/contexts/UserContext"
import Application from "./Application"
import NeedAuth from "./components/pages/NeedAuth"

const App=()=>{
	let UC=useUserContext();
	
	
return(

<UserContextProvider>
	<Router>
		

		

	<Routes>
		<Route path="/signup" element={<Signup/>}/>
		<Route path="/" element={<NeedAuth> <Application/> </NeedAuth>}/>
		<Route path="/login" element={ <Login/> }/>
		
	</Routes>

	</Router>
</UserContextProvider>


)} 


export default App