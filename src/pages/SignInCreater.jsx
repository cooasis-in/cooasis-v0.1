import React from "react";
import siginSvg from "../assets/cooasis-login.svg";
import logo from "../assets/logo.png";
import betaPng from "../assets/beta.png";

const SignInCreater = () => {
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
            Sign in to cooasis creator
          </h2>
          <form className="w-full max-w-md">
            {/* Name and Username Inputs */}
            <div className="mb-6 flex gap-4">
              <input
                className="rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F2F2F2]"
                id="name"
                type="text"
                placeholder="Name"
                style={{ width: "231px", height: "75px" }}
              />
              <input
                className="rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F2F2F2]"
                id="username"
                type="text"
                placeholder="Username"
                style={{ width: "231px", height: "75px" }}
              />
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <input
                className="rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F2F2F2]"
                id="email"
                type="email"
                placeholder="Email"
                style={{ height: "75px" }}
              />
            </div>

            {/* Password Input */}
            <div className="mb-2">
              <input
                className="rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F2F2F2]"
                id="password"
                type="password"
                placeholder="Password (at least 10 characters)"
                style={{ height: "75px" }}
              />
            </div>

            {/* Terms Checkbox */}
            <div className="mt-4 ml-6 flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 mt-1 appearance-none rounded-full w-7 h-7 bg-gray-300 checked:bg-[#00FB87] checked:ring-2 checked:focus:outline-none cursor-pointer"
              />
              <label htmlFor="terms" className="text-[#A6A6A6] text-sm">
                I agree with Cooasis{" "}
                <span className="underline">
                  Terms of Service, Privacy Policy
                </span>
                , and <br />
                default <span className="underline">Notification Settings</span>
                .
              </label>
            </div>

            {/* Create Account Button */}
            <div className="mb-2 mt-4 flex justify-center items-center">
              <button
                className="bg-[#014F59] hover:bg-[#024C37] text-[#00FB87] py-3 px-4 rounded-full focus:outline-none focus:shadow-outline"
                type="button"
                style={{ width: "220px", height: "70px" }}
              >
                Create Account
              </button>
            </div>

            {/* Already have an account link */}
            <div className="text-center">
              <a href="#" className="text-gray-500 text-sm">
                Already have an account? Sign in
              </a>
            </div>

            {/* Google reCAPTCHA message */}
            <div>
              <p className="text-[#A6A6A6] text-center mt-4 text-[12px]">
                This site is protected by reCAPTCHA and the Google <br />
                Privacy Policy and Terms of Service apply.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInCreater;
