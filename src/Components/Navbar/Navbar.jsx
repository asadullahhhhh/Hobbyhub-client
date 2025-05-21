import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../assets/Contexts/Context';
import { Tooltip } from "react-tooltip";
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

const Navbar = () => {


  const { user, setUser, logOut, darkLight, setDarkLight } = use(AuthContext);
  // console.log(darkLight);

  // LogOut function
  const handelLogout = () => {
    logOut().then(() => {
      setUser(null);
    });
  };

  const listItem = (
    <>
      <li className="dark:text-white dark:hover:bg-gray-700 rounded-sm">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        >
          Home
        </NavLink>
      </li>
      <li className="dark:text-white dark:hover:bg-gray-700 rounded-sm">
        <NavLink
          to={"allgroups"}
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        >
          All Groups
        </NavLink>
      </li>
      {user ? (
        <>
          <li className="dark:text-white dark:hover:bg-gray-700 rounded-sm">
            <NavLink
              to={"myGroups"}
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              My Groups
            </NavLink>
          </li>
          <li className="dark:text-white dark:hover:bg-gray-700 rounded-sm">
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
    <nav
      className={` bg-base-100 shadow-sm ${
        darkLight ? "dark" : ""
      } dark:bg-[#333]`}
    >
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden dark:text-white"
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
              className="dark:bg-[#333] top-[102%] menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
        <div className="navbar-end space-x-5">
          {user ? (
            <div
              data-tooltip-id="title"
              data-tooltip-content={user?.displayName}
              className="h-[35px] w-[35px] rounded-full overflow-hidden z-10"
            >
              <img src={user?.photoURL} alt="" />
              <Tooltip id="title"></Tooltip>
            </div>
          ) : (
            ""
          )}
          <div onClick={() => setDarkLight((pre) => !pre)}>
            {darkLight ? (
              <button className="btn dark:bg-[#333] dark:border-gray-600">
                <MdDarkMode color="#fff" />
              </button>
            ) : (
              <button className="btn">
                <MdOutlineLightMode />
              </button>
            )}
          </div>
          <div className="flex gap-3.5 items-center">
            <div>
              {user ? (
                <button
                  onClick={handelLogout}
                  className="btn dark:bg-[#333] dark:border-gray-600 dark:text-white"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to={"login"}
                  className="btn dark:bg-[#333] dark:border-gray-600 dark:text-white"
                >
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