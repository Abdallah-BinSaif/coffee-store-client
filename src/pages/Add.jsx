import React from 'react';
import {Link} from "react-router-dom";
import {IoIosArrowRoundBack} from "react-icons/io";
import formData1 from "../utils/utils.js";

const Add = () => {
    const handleSubmitAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const coffee = formData1(form)
        console.log(coffee)
        fetch("http://localhost:5000/coffees",{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(coffee)
        })
            .then(res=> res.json())
            .then(data => {
                console.log(data)
            })

    }
    return (
        <div className={" container mx-auto"}>
            <Link to={"/"}>
                <button className={"flex justify-center items-center gap-1 text-3xl my-4 font-semibold"}><IoIosArrowRoundBack></IoIosArrowRoundBack>
                    Back to home</button>
            </Link>
            <div className={"bg-[#F4F3F0] p-4 py-12"}>
                <div className={"text-center lg:w-5/6 mx-auto"}>
                    <h2 className={"text-4xl"}>Add New Coffee</h2>
                    <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handleSubmitAdd}>
                    {/*row name and chef */}
                    <div className={"flex gap-4"}>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name={"name"} placeholder="name" className="input input-bordered"
                                   required/>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text" name={"chef"} placeholder="chef" className="input input-bordered"
                                   required/>
                        </div>

                    </div>
                    {/*row supplier and taste */}
                    <div className={"flex gap-4"}>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" name={"supplier"} placeholder="supplier" className="input input-bordered"
                                   required/>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" name={"taste"} placeholder="taste" className="input input-bordered"
                                   required/>
                        </div>

                    </div>
                    {/*row category and details */}
                    <div className={"flex gap-4"}>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name={"category"} placeholder="category" className="input input-bordered"
                                   required/>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name={"details"} placeholder="details" className="input input-bordered"
                                   required/>
                        </div>

                    </div>
                    {/*row photo */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name={"photo"} placeholder="photo_Url" className="input input-bordered"
                               required/>
                    </div>
                    <button className="btn btn-block my-2 bg-[#D2B48C]">Add Coffee</button>
                </form>
            </div>
        </div>
    );
};

export default Add;