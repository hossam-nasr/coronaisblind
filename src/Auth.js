import React, {useEffect, useState} from "react"
import app from "./firebase.js"

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => { // Collection to monitor authentication status and current user
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => { // hook
        app.auth().onAuthStateChanged(setCurrentUser); // Gets updated from here
    }, []);
    
    // Render user profile returned from firebase
    return (
        <AuthContext.Provider value={{currentUser}}> 
            {children} 
        </AuthContext.Provider>
    )
}