import React from "react";

const Button = ({ children, onClick, size, color, text, border, hover, borcolor, font }) => {
  const buttonSize = size || "w-[135px] h-[41px]";
  const buttonColor = color || "bg-[#E1FF2682]";
  const textColor = text || "text-[#014F59]";
  const textborder = border || "none";
  const textHover = hover || "hover:bg-[none]";
  const borderColor = borcolor || "border-[1px] border-[solid] border-[#014F5921]";
  const fontSize = font || ""; // Default to an empty string if no font size is provided

  return (
    <button
      className={`relative ${buttonColor} ${textColor} px-3 py-2 ${borderColor} ${textHover} ${buttonSize} ${textborder} ${fontSize}`}
      onClick={onClick}
    >
      {/* Button Content */}
      <div className="flex items-center text-center">
      <div className="mr-2">
          {/* SVG Icon */}
         <img src="src/assets/right.svg" alt="" className="bg-[#014F59] w-[22px] h-[22px] rounded-full p-[4px]" />
        </div>
        <div>{children}</div>
      </div>
    </button>
  );
};

export default Button;
