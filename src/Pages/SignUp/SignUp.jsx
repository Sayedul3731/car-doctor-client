import { useContext } from "react";
import img from "../../assets/images/login/login.svg"
import {Link} from "react-router-dom"
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {


    const {userCreate} = useContext(AuthContext)
    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        userCreate(email, password)
        .then(result => {
            console.log(result.user);
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
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <h1 className="text-4xl text-center mb-4 font-bold">Sign Up</h1>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
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
                        <input className="btn bg-[#FF3811] text-white" type="submit" value="Sign Up" />
                    </div>
                </form>
                <div className=" mb-5 px-10">
                    <p className="font-medium">Already Have an account? Please <Link to="/login" className="text-[#FF3811] font-bold">Login</Link> </p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;