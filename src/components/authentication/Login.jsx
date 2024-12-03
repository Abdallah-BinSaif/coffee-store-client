import React, {useContext} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import {authContext} from "../AuthProvider.jsx";


const Login = () => {
    const location = useLocation()
    const {signInUser, signInWithGoogle} = useContext(authContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.email.value;
        console.log({email, password})

        signInUser(email, password)
            .then((data)=>{
                console.log(data)
                console.log(data.user)
                const lastSignInTime = data.user.metadata.lastSignInTime;
                fetch("http://localhost:5000/users",{
                    method: "PATCH",
                    headers:{
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({email, lastSignInTime})
                })
                    .then(res => res.json())
                    .then(resData => {
                        console.log(resData)
                    })
                navigate(`${location.state ? location.state.from : "/"}`)
            })
            .catch((err)=>{
                console.log(err.code)
            })
    }
    const handleGoogle = () => {
        signInWithGoogle()
            .then((result)=>{
                console.log(result.user)
                navigate(`${location.state ? location.state.from : "/"}`)
            })
            .catch((err)=>{
                console.log(err.code)
            })
    }
    return (
        <div className="hero bg-base-200">
            <div className="hero-content md:w-4/6 lg:w-2/6 flex-col">
                <div className="text-center lg:text-left">
                    <h2 className="text-5xl font-bold">Login now!</h2>
                </div>
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name={"email"} placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name={"password"} placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <label className="label">
                            <p className="label-text-alt">new here? <Link className={"underline"} to={"/register"}>Register</Link></p>
                        </label>
                    </form>
                    <div className={"divider"}>OR</div>
                    <div className="form-control mb-6 mx-7">
                        <button onClick={handleGoogle} className="btn btn-outline">Google<FcGoogle></FcGoogle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;