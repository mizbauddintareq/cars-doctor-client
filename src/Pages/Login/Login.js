import { Link } from "react-router-dom";
import image from "../../assets/images/login/login.svg";
const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="hero my-20 w-full">
      <div className="hero-content gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={image} alt="login-img" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl py-20">
          <h1 className="text-5xl font-bold text-center">Login</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
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
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center">
            New To Genius Car Please{" "}
            <Link to="/signup" className="font-bold text-red-500">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
