import react,{createContext,useContext,useState} from 'react'

let UserContext=createContext();

const UserContextProvider=({children})=>{
    const[whoIsLoggedIn,setWhoIsLoggedIn]=useState(null);
    const [isLoggedIn,setIsLoggedIn]=useState(false);

    return(
        <UserContext.Provider value={{whoIsLoggedIn,setWhoIsLoggedIn,isLoggedIn,setIsLoggedIn}}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext=()=>{
    return useContext(UserContext);
}


export {UserContextProvider,useUserContext}