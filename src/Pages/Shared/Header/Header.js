import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { FcKey } from "react-icons/fc";
import { Link, NavLink } from "react-router-dom";
import brandLogo from "../../../Assets/logoCL-Anai.png";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  // const handelToggle = () => {
  //   if(toggle)
  // };

  const { user, userSignOut } = useContext(AuthContext);
  console.log(user);

  const handelSignOut = () => {
    userSignOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch(error => {
        // An error happened.
      });
  };
  return (
    <div className="navbar bg-orange-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            {/* conditional login buttons */}
            {user?.uid ? (
              <>
                <li>
                  <button
                    onClick={handelSignOut}
                    className="btn btn-outline btn-error"
                  >
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/home">
          <img className="w-1/2" src={brandLogo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>

          {/* conditional login buttons */}
          {user?.uid ? (
            <>
              <li>
                <button
                  onClick={handelSignOut}
                  className="btn btn-outline btn-error"
                >
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {/* Toggle Button */}
        <button
          onClick={() => setToggle(!toggle)}
          className="btn btn-active btn-ghost"
        >
          {toggle ? (
            <>
              <MdDarkMode></MdDarkMode> Dark
            </>
          ) : (
            <>
              <MdOutlineLightMode></MdOutlineLightMode> Light
            </>
          )}
        </button>

        {/* condition user name and photo */}
        {user?.uid ? (
          <>
            {user?.displayName ? user?.displayName : user?.email}{" "}
            <img
              title={user?.displayName ? user?.displayName : user?.email}
              className="w-10 rounded-full"
              src={user?.photoURL}
              alt=""
            />
          </>
        ) : (
          <FcKey className="w-12 h-8"></FcKey>
        )}
      </div>
    </div>
  );
};

export default Header;
