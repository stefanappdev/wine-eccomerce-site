import react,{createContext,useContext,useState} from 'react'

let UserContext=createContext();

const UserContextProvider=({children})=>{
    const[whoIsLoggedIn,setWhoIsLoggedIn]=useState(null);
    let[isLoggedIn,setIsLoggedIn]=useState(false);
    const[User,setUser]=useState(null);

    return(
        <UserContext.Provider value={{whoIsLoggedIn,setWhoIsLoggedIn,isLoggedIn,
                                        setIsLoggedIn,User,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext=()=>{
    return useContext(UserContext);
}


export {UserContextProvider,useUserContext}