import React, { useState, useEffect } from "react";

const DarkModeToggle = ({ onToggle }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    onToggle(darkMode);
  }, [darkMode, onToggle]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="px-4 py-2 flex items-center justify-center"
    >
      {darkMode ? (
        <img src="/images/darkMode-img.svg" alt="Dark Mode" />
      ) : (
        <img src="/images/lightMode-img.svg" alt="Light Mode" />
      )}
    </button>
  );
};

export default DarkModeToggle;
