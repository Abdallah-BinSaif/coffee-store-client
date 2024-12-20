import React, {useEffect, useState} from 'react';
import banner from "../assets/banner.png"
import icon1 from "../assets/icons/1.png"
import icon2 from "../assets/icons/2.png"
import icon3 from "../assets/icons/3.png"
import icon4 from "../assets/icons/4.png"
import Header from "../components/Header.jsx";
import {Link} from "react-router-dom";
import {TbMug} from "react-icons/tb";
import Swal from "sweetalert2";

const Home = () => {
    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        fetch("https://coffee-store-server-two-lake.vercel.app/coffees")
            .then(res => res.json())
            .then(data => {
                setCoffees(data)
            })
    }, []);

    const handleDelete = (id) => {
        console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-two-lake.vercel.app/coffees/${id}`,{
                    method: "DELETE",
                }).then(res => res.json()).then(data=>{
                    console.log(data)
                    if(data.deletedCount){
                        const remaining = coffees.filter(cof => cof._id !== id)
                        setCoffees(remaining)
                    }
                });
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Coffee has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    
    return (
        <>
            <div className={""} style={{
                backgroundImage: `url(${banner})`,
            }}>
                <div
                    className="hero min-h-[50vh] container mx-auto"
                    >
                    {/*<div className="hero-overlay bg-opacity-60"></div>*/}
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
                            <p className="mb-5">
                                It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                            </p>
                            <button className="btn border-none bg-[#E3B577] text-black">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"bg-[#ECEAE3] py-8"}>
                <div className={"container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"}>
                    <div>
                        <img src={icon1}/>
                        <h2 className={"text-4xl"}>Awesome Aroma</h2>
                        <p>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div>
                        <img src={icon2}/>
                        <h2 className={"text-4xl"}>High Quality</h2>
                        <p>We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div>
                        <img src={icon3}/>
                        <h2 className={"text-4xl"}>Pure Grades</h2>
                        <p>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div>
                        <img src={icon4}/>
                        <h2 className={"text-4xl"}>Proper Roasting</h2>
                        <p>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>

            </div>

            <div>
                <Header></Header>
                <div className={"text-center mb-6 rounded-lg"}>
                    <Link to={"/add"}>
                        <button className="btn border-none bg-[#E3B577] text-black text-base">Add Coffee <TbMug></TbMug></button>
                    </Link>
                </div>
                <div className={"grid grid-cols-2 gap-6 container mx-auto"}>
                    {
                        coffees?.map(cof => <div className={"flex items-center bg-[#F5F4F1]"} key={cof._id}>
                            <img className={"w-1/3"} src={cof.photo}/>
                            <div className={"w-1/3 text-sm"}>
                                <p><strong>Name:</strong>{cof.name}</p>
                                <p><strong>Name:</strong>{cof.chef}</p>
                                <p><strong>Name:</strong>{cof.price || 0} taka</p>
                            </div>
                            <div className="join join-vertical w-1/3 m-3">
                                <Link to={`/details/${cof._id}`} className="btn join-item bg-[#D2b48C]"><button>Details</button></Link>
                                <Link className="btn join-item bg-[#D2B48C]" to={`/update/${cof._id}`}>
                                    <button>Update</button>
                                </Link>
                                <button onClick={() => handleDelete(cof._id)} className="btn join-item bg-[#D2B48C]">Delete</button>
                            </div>

                        </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;