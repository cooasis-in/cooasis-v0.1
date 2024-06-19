import React from "react";
import siginSvg from "../assets/cooasis-login.svg";
import emailSvg from "../assets/email.svg";
import googlelSvg from "../assets/Google.svg";
import logo from "../assets/logo.png";
import betaPng from "../assets/beta.png";

const SignIn = () => {
  return (
    <>
      <div className="h-screen overflow-hidden flex">
        <div className="flex w-full">
          <div className="w-1/1 flex items-center justify-center bg-white relative">
            <img
              src={siginSvg}
              alt="signIN"
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute top-6 left-6 flex items-center space-x-2">
              <img
                src={logo}
                alt="logo"
                className="h-6"
              />
              <img
                src={betaPng}
                alt="beta"
                className="h-3 mt-3"
              />
            </div>
          </div>
          <div className="w-2/3 flex flex-col justify-center items-center ml-20">
            <h2 className="text-[#131313] text-[3.3vw] leading-tight font-medium text-center">
              Sign in to cooasis creator
            </h2>
            <div className="mt-16 flex justify-center items-center">
              <button className="text-[#00FB87] text-[1.5vw] font-normal leading-tight bg-[#014F59] w-[23vw] h-[5vw] rounded-full flex justify-center items-center">
                <img
                  className="w-[1.5vw] mr-[1vw]"
                  src={googlelSvg}
                  alt="google"
                />
                Signup using Google
              </button>
            </div>
            <p className="text-[#909090] text-[1.5vw] font-normal leading-tight text-center my-12">
              or
            </p>
            <div className="flex justify-center items-center">
              <button className="text-[#646464] text-[1.5vw] font-normal leading-tight bg-[#F2F2F2] w-[23vw] h-[5vw] rounded-full flex justify-center items-center">
                <img
                  className="w-[1.5vw] mr-[1vw]"
                  src={emailSvg}
                  alt="email"
                />
                Continue with email
              </button>
            </div>
            <div className="max-w-[30vw] mx-auto mt-12">
              <p className="text-[#5A5A5A] text-[1vw] leading-tight font-normal text-center">
                By creating an account you agree with our{" "}
                <span>
                  <u>Terms of Service, Privacy Policy,</u>{" "}
                </span>
                and our default{" "}
                <span>
                  <u>Notification Settings.</u>
                </span>
              </p>
            </div>
            <div className="mx-auto mt-8">
              <p className="text-[#5A5A5A] text-[1vw] leading-tight font-normal text-center">
                Already have an account?
                <span>
                  <u>Sign In</u>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
