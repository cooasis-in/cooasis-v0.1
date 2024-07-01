import React, { useState } from "react";
import "./userRegister.css";
import { Link } from "react-router-dom";
import VerifyEmail from "./VerifyEmail";
import UserSignIn from "./UserSignIn";

const UserRegister = () => {
  const [showOnClick, setShowOnClick] = useState(false);
  const [showVerificationForm, setShowVerificationForm] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const clickOnNextBtn = () => {
    setShowOnClick(true);
  };

  const clickOnGoogleSignup = () => {
    setShowVerificationForm(true);
  };

  const clickOnSignIn = () => {
    setShowSignIn(true); // Set showSignIn to true when button is clicked
  };

  const clickOnSignUp = () => {
    setShowSignIn(false); // Set showSignIn to false when switching back to sign up
  };

  return (
    <section className="signup-page px-6 xl:px-[36px]">
      <div className="mx-auto md:px-10 max-w-[1700px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-80px)] items-center">
          <div className={`col-span-6 lg:block ${showOnClick ? "hidden" : ""}`}>
            <div className="!relative">
              <h1 className="media text-[60px] sm:text-[80px] lg:text-[60px] text-[#014F59] leading-[60px] sm:leading-[70px] lg:leading-[50px] f-PowerGrotesk  xl:max-w-[686px] text-center lg:text-left">
                Nex-gen design ecosystem
              </h1>
            </div>
            <div className="flex justify-center lg:justify-start mt-16 lg:mt-0">
              <img
                src="/images/login-center.png"
                alt=""
                className="sing-up-img"
              />
            </div>
            {/* Only For Mobiles Screen Content Start */}
            <div className="block lg:hidden bg-[#014F59] py-4 rounded-full mt-24">
              <button
                onClick={clickOnNextBtn}
                className="f-PowerGrotesk text-[23px] md:text-[33px] text-[#E1FF26] leading-[14.13px] font-normal w-full"
              >
                Next
              </button>
            </div>
            {/* Only For Mobiles Screen Content End */}
          </div>
          <div
            className={`col-span-6 lg:pl-14 lg:block flex-col h-full ${
              showOnClick ? "flex" : "hidden"
            }`}
          >
            <div className="res-adjust bg-white rounded-[40px] lg:rounded-[25px] mt-[16px] lg:mt-0 border-[1px] border-[#014F5921] !pb-2 p-4 md:p-4 sm:p-8 xl:px-[10%] max-w-[355px] sm:max-w-[455px] md:max-w-[555px] lg:max-w-auto mx-auto w-full">
              {showVerificationForm ? (
                <VerifyEmail />
              ) : showSignIn ? (
                <UserSignIn />
              ) : (
                <>
                  <h2 className="f-PowerGrotesk text-[35px] lg:text-[50px] leading-[29.08px] text-[#014F59] text-center mt-2 lg:mt-0">
                    Sign up
                  </h2>
                  <form>
                    <div className="mb-3 gap-2 flex-col lg:flex-row mt-8 lg:mt-8 xl:mt-[5%] flex items-center relative">
                      <input
                        type="username"
                        id="username"
                        placeholder="User Name"
                        className="f-HelveticaNeueUltraLight hidden lg:block text-[12px] lg:text-[17px] text-[#014F5980] leading-[9.97px] font-extralight w-full px-6 py-4 lg:px-8 lg:py-6 border-[1px] border-[#014F5917] rounded-full focus:outline-none focus:ring-2"
                      />
                      <input
                        type="email"
                        id="email"
                        placeholder="Eg. Jeff@cooasis.in"
                        className="f-HelveticaNeueUltraLight text-[12px] lg:text-[17px] text-[#014F5980] leading-[9.97px] font-extralight w-full px-6 py-4 lg:px-8 lg:py-6 border-[1px] border-[#014F5917] rounded-full focus:outline-none focus:ring-2"
                      />
                      <img
                        src="/images/email-2.svg"
                        alt=""
                        className="absolute right-[25px] top-[16px] lg:top-0"
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
                    <div className="mt-8 lg:mt-4 mb-2 flex justify-center flex-col items-center">
                      <button
                        onClick={clickOnGoogleSignup}
                        className="f-PowerGrotesk text-[16px] lg:text-[24px] text-[#E1FF26] leading-[14.13px] lg:leading-[19.94px] font-normal bg-[#014F59] px-6 py-4 lg:px-8 lg:py-6 w-full rounded-full flex items-center justify-center"
                      >
                        Register
                      </button>

                      <button className="f-PowerGrotesk hidden lg:block text-[16px] lg:text-[24px] text-[#E1FF26] leading-[14.13px] lg:leading-[19.94px] font-normal bg-[#014F59] px-6 py-4 lg:px-8 lg:py-6 rounded-full flex mt-2 items-center justify-center">
                        <span className="mr-2">
                          <img
                            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                            alt="Google"
                            className="h-5 w-5"
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
                      <p className="f-HelveticaNeueRoman mt-6 text-[14px] text-[#014F59] leading-[20.52px] text-center">
                        Already have an account?{" "}
                        <span className="text-[#7D22FF]">
                          <button onClick={clickOnSignIn}>Sign in</button>
                        </span>
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
            {!showVerificationForm && !showSignIn && (
              <div className="block lg:hidden ">
                <p className="f-HelveticaNeueRoman mt-6 text-[12px] md:text-[14px] text-[#014F59] leading-[20.52px] text-center">
                  By creating an account you agree with our
                  <span>
                    <u>Terms of Service, Privacy Policy,</u>
                  </span>
                  and our default &nbsp;
                  <span>
                    <u>Notification Settings</u>.
                  </span>
                </p>
                <p className="f-HelveticaNeueRoman mt-3 text-[12px] md:text-[14px] text-[#014F59] leading-[20.52px] text-center">
                  Already have an account?
                  <span className="text-[#7D22FF]">
                    <button onClick={clickOnSignIn}>Sign In</button>
                  </span>
                </p>
              </div>
            )}
            <div className="mt-[auto] pt-4 block lg:hidden">
              <img src="images/signup-image.png" alt="" className="" />
            </div>
            <div className="relative">
              <img src="images/headphone.svg" alt="" className="absolute bottom-[27px] right-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserRegister;
