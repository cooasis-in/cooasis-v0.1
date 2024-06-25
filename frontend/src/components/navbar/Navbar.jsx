import React from "react";

const Navbar = () => {
  return (
    <>
      <div className=" h-20 flex justify-between lg:bg-[#FFFCF4] items-center px-4 lg:px-10 ">
        <div className="flex ml-2">
          <img src="images/cooasis.svg" alt="" className="h-10 w-20" />
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
