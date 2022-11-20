import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext()
export const GlobalProvider = ({ children }) => {
    const [error, setError] = useState(false) 
    return (
        <GlobalContext.Provider value={{ error, setError }}>
            {children}
        </GlobalContext.Provider>
    )
}