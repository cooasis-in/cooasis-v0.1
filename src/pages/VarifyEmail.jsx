import React from "react";
import siginSvg from "../assets/cooasis-login.svg";
import logo from "../assets/logo.png";
import betaPng from "../assets/beta.png";

const VarifyEmail = () => {
  return (
    <div className="h-screen overflow-hidden flex">
      {/* Left Section */}
      <div className="flex w-full">
        <div className="w-1/1 flex items-center justify-center bg-white relative">
          <img
            src={siginSvg}
            alt="signIN"
            className="max-w-full max-h-full object-contain"
          />
          <div className="absolute top-6 left-6 flex items-center space-x-2">
            <img src={logo} alt="logo" className="h-6" />
            <img src={betaPng} alt="beta" className="h-3 mt-3" />
          </div>
          <div className="absolute">
            <button className="flex border items-center ml-[250px] mb-[400px] justify-center w-12 h-12 bg-[#F6F6F64D] bg-opacity-20 rounded-full">
              <svg
                width="39"
                height="15"
                viewBox="0 0 39 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0048 0.000385476C12.0048 6.90164 6.63431 12.5008 0.000119885 12.5008"
                  stroke="#969696"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M12.0048 24.9961C12.0048 18.0948 6.63431 12.4957 0.00012207 12.4957M38.1265 12.4957L2.75369 12.4957"
                  stroke="#969696"
                  stroke-width="2"
                  stroke-miterlimit="8"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-2/3 flex flex-col justify-center items-center p-10 ml-20">
          <h2 className="text-[#131313] text-[2.5vw] leading-tight font-medium text-center mb-8">
            Varify your email
          </h2>
           
           <span className="text-[#5A5A5A] mb-6 text-[12px]">Enter 6-Digit verification code received on your email.</span>

            {/* Email Input */}
            <div className="mb-6">
              <input
                className="rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F2F2F2]"
                id="email"
                type="email"
                style={{ width:"400px" , height: "70px" }}
              />
            </div>

          {/* Create Account Button */}
          <div className="mb-2 mt-4 flex justify-center items-center">
            <button
              className="bg-[#014F59] hover:bg-[#024C37] text-[#00FB87] py-3 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
              style={{ width: "200px", height: "70px" }}
            >
              Varify Account
            </button>
          </div>

           {/* Already have an account link */}
           <div className="text-center mt-6">
              <a href="#" className="text-gray-500 text-sm">
                Already have an account? Sign in
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VarifyEmail;
