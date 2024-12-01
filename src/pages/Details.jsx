import React from 'react';
import {Link} from "react-router-dom";
import {IoIosArrowRoundBack} from "react-icons/io";

const Details = () => {
    return (
        <div className={" container mx-auto"}>
            <Link to={"/"}>
                <button className={"flex justify-center items-center gap-1 text-3xl my-4 font-semibold"}>
                    <IoIosArrowRoundBack></IoIosArrowRoundBack>
                    Back to home
                </button>
            </Link>
            <div className={"bg-[#F4F3F0] p-4 py-12"}>

            </div>
        </div>
    );
};

export default Details;