import React from 'react';
import {Link} from "react-router-dom";

const Heading = () => {
    return (
        <div className={"back text-white object-cover"}>
            <div className={"flex justify-between container mx-auto items-center"}>
                <div className={""}>
                    <img src={""}/>
                    <p>profile</p>
                </div>
                <div className={"flex justify-center items-center gap-2 py-4 "}>
                    <img className={"h-10"} src={"/logo1.png"}/>
                    <h2 className={"text-3xl"}>Espresso Emporium</h2>
                </div>
                <div>
                    <Link className={"btn"} to={"/login"}>Login</Link>
                    <Link className={"btn"}>LogOut</Link>
                </div>
            </div>

        </div>
    );
};

export default Heading;