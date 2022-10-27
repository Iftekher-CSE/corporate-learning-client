import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Register = () => {
  const { userRegistration, userProfileUpdate } = useContext(AuthContext);

  const handelSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    // user registration and update profile
    userRegistration(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);

        // update user profile
        const profile = {
          displayName: name,
          photoURL: photoURL,
        };
        userProfileUpdate(profile)
          .then(() => {})
          .catch(error => console.error(error));

        // form reset
        form.reset();
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handelSubmit}>
      <div className="hero items-start min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Yourself</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body p-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="full name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="photo URL"
                  className="input input-bordered"
                />
              </div>
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
                  <p>
                    <small>
                      If you have account,{" "}
                      <Link
                        to="/login"
                        className="label-text-alt link link-hover"
                      >
                        Go to Login
                      </Link>
                    </small>
                  </p>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
