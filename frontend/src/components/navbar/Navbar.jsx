import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="absolute h-20 w-full flex !justify-between lg:bg-[#FFFCF4] items-center px-4 lg:px-10 ">
        <div className="flex ml-2">
        <Link to="">
        <img src="images/cooasis.svg" alt="Cooasis Logo" className="h-10 w-20" />
      </Link>
          <img src="images/beta.svg" alt="" className=" ml-2 mt-5 h-4" />
        </div>
        <div>
          <button>
            <img src="images/darkMode.png" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
