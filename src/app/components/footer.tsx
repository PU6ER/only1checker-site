import * as React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex h-16 ">
      <div className="flex justify-between items-center max-w-1110 w-full h-full mx-auto font-Poppins my-0 ">
        <span className="text-only1 font-medium text-sm">© 2023 only1checker Inc.</span>

        <div className="flex items-center">
          <ul className="flex justify-between  font-medium text-sm text-only1">
            <Link
              className="mr-4 hover:text-white transition ease-in delay-100"
              to="/privacy"
            >
              Privacy Policy
            </Link>
            <Link
              className="mr-4 hover:text-white transition ease-in delay-100"
              to="/terms"
            >
              Terms  & Conditions
            </Link>
          </ul>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Footer;
