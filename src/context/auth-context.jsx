import { createContext,useState } from "react"


export const Market_Context = createContext({
    loggedInUser: null, setLoggedInUser : () => null
})

export const Market_Context_Provider = ({children}) => {
    const [loggedInUser,setLoggedInUser] = useState(null)
    const value = {loggedInUser,setLoggedInUser}

    return(
        <Market_Context.Provider value={value}>
            {children}
        </Market_Context.Provider>
    )
}