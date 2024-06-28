import React from "react";
import { Link } from "react-router-dom";

const UserSignIn = () => {
  return (
    <>
      <form>
        <h2 className="f-PowerGrotesk text-[35px] lg:text-[50px] leading-[29.08px] text-[#014F59] text-center mt-2 lg:mt-0">
          Sign up
        </h2>
        <div className="mb-3 mt-8 lg:mt-6 xl:mt-[5%] flex items-center relative">
          <input
            type="email"
            id="email"
            placeholder="Eg. Jeff@cooasis.in"
            className="f-HelveticaNeueUltraLight text-[12px] lg:text-[17px] text-[#014F5980] leading-[9.97px] font-extralight w-full px-6 py-4 lg:px-8 lg:py-6 border-[1px] border-[#014F5917] rounded-full focus:outline-none focus:ring-2"
          />
          <img
            src="/images/email-2.svg"
            alt=""
            className="absolute right-[35px]"
          />
        </div>
        <div className="mb-4 lg:mb-6 flex items-center relative">
          <input
            type="password"
            id="password"
            placeholder="At least 12 characters"
            className="f-HelveticaNeueUltraLight text-[12px] lg:text-[17px] text-[#014F5980] leading-[9.97px] font-extralight w-full px-6 py-4 lg:px-8 lg:py-6 border-[1px] border-[#014F5917] rounded-full focus:outline-none focus:ring-2"
          />
          <img
            src="/images/hidden.svg"
            alt=""
            className="absolute right-[35px] hidden lg:block"
          />
        </div>
        <div className="mt-8 lg:mt-4 mb-2">
          <button className="f-PowerGrotesk  text-[16px] lg:text-[24px] text-[#E1FF26] leading-[14.13px] lg:leading-[19.94px] font-normal bg-[#014F59] px-6 py-4 lg:px-8 lg:py-6 w-full rounded-full flex items-center justify-center">
            <span className="mr-2">
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="h-5 w-5 mr-2"
              />
            </span>
            Signup using Google
          </button>
        </div>
        <div className="hidden lg:block">
          <p className="f-HelveticaNeueRoman mt-6 text-[14px] text-[#014F59] leading-[20.52px] text-center">
            By creating an account you agree with our{" "}
            <span>
              <u>Terms of Service, Privacy Policy,</u>{" "}
            </span>
            and our default{" "}
            <span>
              <u>Notification Settings</u>.
            </span>
          </p>
          {/* <p className="f-HelveticaNeueRoman mt-6 text-[14px] text-[#014F59] leading-[20.52px] text-center">
            Already have an account?{" "}
            <span className="text-[#7D22FF]">
              <u>Sign In</u>
            </span>
          </p> */}
        </div>
      </form>
    </>
  );
};

export default UserSignIn;
