import React from "react"
import Signup from "./components/forms/Signup"
import Login from "./components/forms/Login"
import {BrowserRouter as Router,Routes,Route,Link,useNavigate} from "react-router-dom"
import { UserContextProvider} from "./components/contexts/UserContext"
import UserHome from "./components/pages/UserHome"
import NeedUserAuth from "./components/pages/NeedUserAuth"
import ViewAllBeers from "./components/pages/ViewAllBeers"
import ViewOneBeer from "./components/pages/ViewOneBeer"
import ViewAllWines from "./components/pages/ViewAllWines"
import ViewOneWine from "./components/pages/ViewOneWine"
import Views from "./components/pages/Views"
import Checkout from "./components/pages/Checkout"
import CreateProducts from "./components/pages/CreateProducts"
import UpdateProducts from "./components/pages/UpdateProducts"

const App=()=>{
	

	
	
return(

<UserContextProvider>
	<Router>
		

		

	<Routes>
		<Route path="/signup" element={<Signup/>}/>
		<Route path="/" element={<NeedUserAuth> <UserHome/> </NeedUserAuth>}/>
		
		<Route path="/users">

			<Route path=":id/home" element={<UserHome/>}/>
			<Route path=":id/checkout" element={<Checkout/>}/>
			
			
		</Route>

		
		<Route path="/login" element={ <Login/> }/>
		
		<Route path="/views" element={<Views/>}/>


		<Route path="beers" element={<ViewAllBeers/>}/>
		<Route path="wines" element={<ViewAllWines/>}/>

		<Route path="beers">
			<Route path=":id" element={<ViewOneBeer/>}/>
		</Route>

		<Route path="wines">
			<Route path=":id" element={<ViewOneWine/>}/>
		</Route>


		


		<Route path="*" element={<div><strong>Looks like you got lost. Error 404!</strong></div>}/>



		
	</Routes>

	</Router>
</UserContextProvider>


)} 


export default App