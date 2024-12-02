import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {authContext} from "./AuthProvider.jsx";

const Heading = () => {
    const {currentUser,signOutUser} = useContext(authContext);

    const handleLogout = () => {
        signOutUser()
    }
    return (
        <div className={"back text-white object-cover"}>
            <div className={"flex justify-between container mx-auto items-center"}>
                <div className={""}>
                    <img src={""}/>
                    <p>{currentUser.email}</p>
                </div>
                <div className={"flex justify-center items-center gap-2 py-4 "}>
                    <img className={"h-10"} src={"/logo1.png"}/>
                    <h2 className={"text-3xl"}>Espresso Emporium</h2>
                </div>
                <div>

                    {
                        currentUser ?
                            <Link onClick={handleLogout} to={"/login"} className={"btn"}>LogOut</Link> :
                            <Link className={"btn"} to={"/login"}>Login</Link>
                    }


                </div>
            </div>

        </div>
    );
};

export default Heading;