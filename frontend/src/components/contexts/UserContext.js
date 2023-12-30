import react,{createContext,useContext,useState} from 'react'

let UserContext=createContext();

const UserContextProvider=({children})=>{
    const[whoIsLoggedIn,setWhoIsLoggedIn]=useState(null);
    let[isLoggedIn,setIsLoggedIn]=useState(false);
    const[UserId,setUserId]=useState(null);

    return(
        <UserContext.Provider value={{whoIsLoggedIn,setWhoIsLoggedIn,isLoggedIn,setIsLoggedIn,setUserId,UserId}}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext=()=>{
    return useContext(UserContext);
}


export {UserContextProvider,useUserContext}