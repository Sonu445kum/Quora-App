import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserPlus, FaQuora } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Logo Section */}
      <Link to="/" className="flex items-center space-x-2 text-red-600">
        <FaQuora size={30} />
        <span className="text-2xl font-bold">Quora</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex space-x-6 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center space-x-1 hover:text-red-600 transition ${
              isActive ? 'text-red-600 font-semibold' : 'text-gray-700'
            }`
          }
        >
          <FaHome />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            `flex items-center space-x-1 hover:text-red-600 transition ${
              isActive ? 'text-red-600 font-semibold' : 'text-gray-700'
            }`
          }
        >
          <FaSignInAlt />
          <span>Login</span>
        </NavLink>

        <NavLink
          to="/register"
          className={({ isActive }) =>
            `flex items-center space-x-1 hover:text-red-600 transition ${
              isActive ? 'text-red-600 font-semibold' : 'text-gray-700'
            }`
          }
        >
          <FaUserPlus />
          <span>Register</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
