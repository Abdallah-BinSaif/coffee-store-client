import React, {useContext} from 'react';
import {authContext} from "../AuthProvider.jsx";
import {Navigate} from "react-router-dom";

const Private = ({children}) => {
    const {loading, currentUser} = useContext(authContext);
    console.log(loading, currentUser)

    if(loading){
        return (
            <div className={"min-h-screen flex justify-center items-center"}>

            </div>
        )
    }

    if(!currentUser){
        return <Navigate to={"/login"}/>
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default Private;