import React from 'react';
import {Link, useLoaderData} from "react-router-dom";
import {IoIosArrowRoundBack} from "react-icons/io";

const Details = () => {
    const coffee = useLoaderData();
    console.log(coffee)
    const {name, chef, supplier, taste, category, details, photo}= coffee;

    return (
        <div className={" container mx-auto"}>
            <Link to={"/"}>
                <button className={"flex justify-center items-center gap-1 text-3xl my-4 font-semibold"}>
                    <IoIosArrowRoundBack></IoIosArrowRoundBack>
                    Back to home
                </button>
            </Link>
            <div className={"bg-[#F4F3F0] p-4 py-12 md:flex justify-center gap-16 items-center"}>
                <img className={"md:w-2/6"} src={photo}/>
                <div className={"space-y-1"}>
                    <p><strong>Name: </strong> {name}</p>
                    <p><strong>Chef: </strong> {chef}</p>
                    <p><strong>Supplier: </strong> {supplier}</p>
                    <p><strong>Taste: </strong> {taste}</p>
                    <p><strong>Category: </strong> {category}</p>
                    <p><strong>Details: </strong> {details}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;