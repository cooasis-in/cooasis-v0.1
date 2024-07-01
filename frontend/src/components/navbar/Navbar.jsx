import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleDarkModeToggle = (isDarkMode) => {
    setDarkMode(isDarkMode);
  };


  return (
    <div className="h-20 w-full flex justify-between lg:bg-[#FFFCF4] items-center px-4 lg:px-10 dark:bg-[#1B1F20]">
      <div className="flex ml-2">
        <Link to="">
          <img
            src={darkMode ? "images/darkmode.svg" : "images/lightmode.svg"}
            alt="Cooasis Logo"
            className="h-10 w-30"
          />
        </Link>
        {/* <img src="images/beta.svg" alt="Beta" className="ml-2 mt-5 h-4" /> */}
      </div>
      <div>
        <DarkModeToggle onToggle={handleDarkModeToggle} />
      </div>
    </div>
  );
};

export default Navbar;
