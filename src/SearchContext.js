import { createContext,useState } from "react";

export const SearchContext=createContext();

export const SearchProvider = ({children}) => {
    const [searchTerm,setSearchTerm] = useState("");
    const [searchInput,setSearchInput] = useState("");
    return(
        <SearchContext.Provider value={{searchTerm,setSearchTerm,searchInput,setSearchInput}}>
            {children}
        </SearchContext.Provider>
    );
};