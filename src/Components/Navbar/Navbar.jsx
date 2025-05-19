import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../assets/Contexts/Context';
import { Tooltip } from "react-tooltip";

const Navbar = () => {

    const {user, setUser, logOut} = use(AuthContext)

    // LogOut function 
    const handelLogout = () => {
        logOut()
            .then(res => {
                setUser(null)
            })
    }

    const listItem = (
      <>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"allgroups"}
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            All Groups
          </NavLink>
        </li>
        {user ? (
          <>
            <li>
              <NavLink
                to={"myGroups"}
                className={({ isActive }) => (isActive ? "text-blue-500" : "")}
              >
                My Groups
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"createGroups"}
                className={({ isActive }) => (isActive ? "text-blue-500" : "")}
              >
                Create Group
              </NavLink>
            </li>
          </>
        ) : (
          ""
        )}
      </>
    );

    return (
      <nav className=" bg-base-100 shadow-sm">
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {listItem}
              </ul>
            </div>
            <Link to={"/"} className="text-xl font-medium text-blue-400">
              Hobby<span className="font-bold text-orange-400">HUB</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{listItem}</ul>
          </div>
          <div className="navbar-end">
            <div className="flex gap-3.5 items-center">
              {user ? (
                <div
                  data-tooltip-id="title"
                  data-tooltip-content={user?.displayName}
                  className="h-[40px] w-[40px] rounded-full overflow-hidden"
                >
                  <img src={user?.photoURL} alt="" />
                  <Tooltip id="title"></Tooltip>
                </div>
              ) : (
                ""
              )}
              <div>
                {user ? (
                  <button onClick={handelLogout} className="btn">Logout</button>
                ) : (
                  <Link to={"login"} className="btn">
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;