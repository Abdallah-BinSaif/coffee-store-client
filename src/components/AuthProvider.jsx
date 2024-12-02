import React, {createContext, useEffect, useState} from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import app from "../../firebase.config.js";

const auth = getAuth(app);
export const authContext = createContext(null)
const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // firebase authentications
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                setCurrentUser(user)
            }else{
                setCurrentUser(null)
            }
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    }, []);

    const authInfo={
        currentUser,
        loading,
        createUser,
        signInUser,
        signOutUser,
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;