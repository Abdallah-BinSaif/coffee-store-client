import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import {authContext} from "../AuthProvider.jsx";

const Registration = () => {
    const navigate = useNavigate();
    const {createUser}= useContext(authContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((data)=>{
                console.log(data)
                const lastSigInTime = data.user.metadata.lastSignInTime
                const creationTime = data.user.metadata.creationTime
                const uid = data.user.uid
                fetch("https://coffee-store-server-two-lake.vercel.app/users",{
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({uid ,name, email, creationTime,lastSigInTime})
                })
                    .then(res=> res.json())
                    .then(data => {
                        console.log(data)
                    })
                navigate("/")
            })
            .catch((err)=>{
                console.log(err.code)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h2 className="text-5xl font-bold">Register now!</h2>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name={"name"} placeholder="name" className="input input-bordered"
                                   required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name={"email"} placeholder="email" className="input input-bordered"
                                   required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name={"password"} placeholder="password"
                                   className="input input-bordered" required/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <label className="label">
                            <p className="label-text-alt">Already have an account? <Link className={"underline"} to={"/login"}>Login</Link></p>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;