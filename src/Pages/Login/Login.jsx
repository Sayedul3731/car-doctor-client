import { useContext } from "react";
import img from "../../assets/images/login/login.svg"
import {Link, useLocation, useNavigate} from "react-router-dom"
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const Login = () => {

    const {signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            console.log(result.user);
            alert('Logged in successfully!')
            const user = {email}
            axios.post("http://localhost:5000/jwt",user,{
                withCredentials: true
            })
            .then(res => {
                console.log(res.data)
                if(res.data?.success){
                     navigate(location?.state ? location?.state : "/")
                }
            })
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="text-center w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <h1 className="text-4xl text-center mb-4 font-bold">Login</h1>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#FF3811] text-white" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className="mb-5 px-10">
                        <p className="font-medium">New to Cars Doctor? Please <Link to="/signUp" className="text-[#FF3811] font-bold">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;