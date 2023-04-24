import { createContext, useEffect, useState } from "react";
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth';

export const UserData = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    useEffect(() => {
        onAuthStateChanged(auth, (cuser) => {
            setUser(cuser);
        });


    }, []);

    return (
        < UserData.Provider value={user} >
            {children}
        </UserData.Provider>)

}