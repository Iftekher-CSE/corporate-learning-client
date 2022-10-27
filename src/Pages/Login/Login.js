import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState("");
  const { userSingIn, userGoogleLogin, userGitLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // get login data and user login
  const formSubmitHandler = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    userSingIn(email, password)
      .then(result => {
        setError("");
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      });

    form.reset();
  };

  // Handel Google login btn
  const handelGoogleLogin = () => {
    userGoogleLogin()
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.error(error);
      });
  };

  // Handel git login btn
  const handelGitLogin = () => {
    userGitLogin()
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <div className="hero items-start min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={formSubmitHandler} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <p>
                    <small className="text-red-500">{error}</small>
                  </p>
                </label>
                <label className="label">
                  <p>
                    <small>
                      If you are not register,{" "}
                      <Link
                        to="/register"
                        className="label-text-alt link link-hover"
                      >
                        Go to Register
                      </Link>
                    </small>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

            {/* Google and git login button */}
            <div className="flex justify-around mb-4">
              <button
                onClick={handelGoogleLogin}
                className="btn btn-outline btn-info rounded-md"
              >
                <FcGoogle></FcGoogle> Login
              </button>
              <button onClick={handelGitLogin} className="btn btn-outline ">
                <BsGithub></BsGithub> Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
