import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const [searchFIlter , setSearchFilter] = useState({
        title:'',
        location:''
    })

    const [isSearched,setIsSearched] = useState(false)

    const value = {
        setSearchFilter, searchFIlter, 
        setIsSearched, isSearched,
    }

    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)
}