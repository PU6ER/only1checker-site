import * as React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex h-16">
      <div className="flex justify-between items-center max-w-1110 w-full h-full mx-auto  my-0 ">
        
          <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="only1-logo" />
        
        <div className="flex items-center">
          <ul className="flex justify-between font-Poppins font-medium text-sm text-only1">
            <Link
              className="mr-4 hover:text-white transition ease-in delay-100"
              to="/"
            >
              About
            </Link>
            <Link
              className="mr-4 hover:text-white transition ease-in delay-100"
              to="/pricing"
            >
              Pricing
            </Link>
            <Link
              className="mr-4 hover:text-white transition ease-in delay-100"
              to="/faq"
            >
              FAQ
            </Link>
          </ul>
        </div>
        <div className="flex items-center text-sm text-white font-Poppins font-medium">
          <Link
            className="mr-4 px-4 py-2 bg-green-600 rounded-lg hover:bg-green-500 transition ease-in delay-100"
            to="/login"
          >
            Log in
          </Link>
          <Link
            className="hover:text-gray-500 transition ease-in delay-100"
            to="/signup"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
