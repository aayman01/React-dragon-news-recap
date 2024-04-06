import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        console.log(form.get('email'))
    }

    return (
      <div>
        <Navbar></Navbar>
        <h2 className="text-3xl text-center my-7">Login your account</h2>
        <div className=" lg:w-1/2 md:w-3/4 mx-auto shadow-2xl rounded-lg bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-center mt-6">Do not have an account?<Link className="text-red-600" to='/register'>Register</Link> </p>
          </form>
        </div>
      </div>
    );
};

export default Login;