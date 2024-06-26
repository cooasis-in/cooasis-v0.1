import React, { useState } from "react";
import "./EcosystemSignup.css";
import { Link } from "react-router-dom";

const EcosystemSignup = () => {
  const [showOnClic, setShowOnClic] = useState(false);
  const [showVerificationForm, setShowVerificationForm] = useState(false);

  const clickOnNextBtn = () => {
    setShowOnClic(true);
  };

  const clickOnGoogleSignup = () => {
    setShowVerificationForm(true);
  };

  return (
    <section className="signup-page px-6 xl:px-[36px] pt-7">
      <div className="mx-auto md:px-10 max-w-[1700px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-100px)] items-center">
          <div className={`col-span-6 lg:block ${showOnClic ? "hidden" : ""}`}>
            <div className="!relative md:mt-[5%] lg:mt-[10%]">
              <h1 className="media text-[60px] sm:text-[80px] lg:text-[60px] text-[#014F59] leading-[60px] sm:leading-[70px] lg:leading-[50px] sing-up-title xl:max-w-[686px] text-center lg:text-left mt-16 ">
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
            <div className="block lg:hidden bg-[#014F59] py-6 rounded-full mt-20">
              <button
                onClick={clickOnNextBtn}
                className="text-[24px] md:text-[33px] text-[#E1FF26] leading-[14.13px] font-normal w-full"
              >
                Next
              </button>
              {/* <Link to='/slider'>
              <button
                className="text-[24px] md:text-[33px] text-[#E1FF26] leading-[14.13px] font-normal w-full"
              >
                Next
              </button>
              </Link> */}
            </div>
            {/* Only For Mobiles Screen Content End */}
          </div>
          <div
            className={`col-span-6 lg:pl-14 lg:block ${
              showOnClic ? "" : "hidden"
            }`}
          >
            <div className="res-adjust bg-white rounded-[40px] lg:rounded-[25px] mt-10 lg:mt-0 border-[1px] border-[#014F5921] p-4 sm:p-8 xl:px-[10%] max-w-[355px] sm:max-w-[455px] md:max-w-[555px] lg:max-w-auto mx-auto">
              {showVerificationForm ? (
                <>
                  <div className="hidden lg:flex justify-center">
                    <img
                      src="images/email.png"
                      alt="Email Icon"
                      className="h-16 w-16"
                    />
                  </div>
                  <h2 className="text-[40px] font-bold leading-[41.55px] text-[#014F59] mb-8 text-center hidden lg:block">
                    Verify your email
                  </h2>
                  <h2 className="text-[35px] font-bold text-[#014F59] mt-2 text-center block lg:hidden">
                    Verify
                  </h2>
                  <form>
                    <div className="mb-4 flex flex-col items-center justify-center relative">
                      <p className="text-[12px] sm:text-[15px] leading-[17.59px] lg:leading-[14.13px] w-full text-center pt-4 pb-2 lg:py-6 text-[#5A5A5A] font-medium">
                        Enter the 4-digit verification code sent to
                        j*****@***.com
                      </p>
                      <p className="text-[#C8C8C8]">Change email</p>
                    </div>
                    <div className="mt-6 lg:mt-0 mb-6 flex items-center justify-center relative">
                      <input
                        type="text"
                        id="verification-code-1"
                        placeholder=""
                        className="readjustment text-[17px] text-[#014F5980] leading-[14.13px] font-extralight text-center w-20 h-16 border-[1px] border-[#014F5917] rounded-lg focus:outline-none focus:ring-2 mx-2"
                      />
                      <input
                        type="text"
                        id="verification-code-2"
                        placeholder=""
                        className="readjustment text-[17px] text-[#014F5980] leading-[14.13px] font-extralight text-center w-20 h-16 border-[1px] border-[#014F5917] rounded-lg focus:outline-none focus:ring-2 mx-2"
                      />
                      <input
                        type="text"
                        id="verification-code-3"
                        placeholder=""
                        className="readjustment text-[17px] text-[#014F5980] leading-[14.13px] font-extralight text-center w-20 h-16 border-[1px] border-[#014F5917] rounded-lg focus:outline-none focus:ring-2 mx-2"
                      />
                      <input
                        type="text"
                        id="verification-code-4"
                        placeholder=""
                        className="readjustment text-[17px] text-[#014F5980] leading-[14.13px] font-extralight text-center w-20 h-16 border-[1px] border-[#014F5917] rounded-lg focus:outline-none focus:ring-2 mx-2"
                      />
                    </div>
                  </form>
                  <div className="my-4 text-center text-gray-500">
                    <a
                      href="#"
                      className="text-[#5A5A5A] text-[12px] lg:text-[18px] leading-[17.59px] font-light lg:font-medium"
                    >
                      <span className="text-[#C8C8C8]">
                        Didn't get the code?
                      </span>{" "}
                      Click to resend
                    </a>
                  </div>
                  <Link  to="/verified" className="text-[17px] lg:text-[24px] text-[#E1FF26] leading-[14.13px] lg:leading-[19.94px] font-normal bg-[#014F59] px-6 py-4 lg:px-8 lg:py-6 w-full rounded-full flex items-center justify-center">
                    Verify Account
                  </Link>
                  <div className="flex items-center justify-center">
                    <button
                      onClick={() => setShowVerificationForm(false)}
                      className="text-[16px] text-[#C8C8C8] leading-[20px] font-medium bg-transparent px-6 py-3 w- rounded-full mt-4 hidden lg:block"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => setShowVerificationForm(false)}
                      className="text-[12px] text-[#C8C8C8] leading-[17.59px] font-normal bg-transparent px-6 py-3 w- rounded-full block lg:hidden"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-[35px] lg:text-[50px] leading-[29.08px] text-[#014F59] text-center mt-2 lg:mt-0 sing-up-title">
                    Sign up
                  </h2>
                  <form>
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
                    <div className="mt-8 lg:mt-4 mb-4">
                      <button
                        onClick={clickOnGoogleSignup}
                        className="sing-up-title text-[16px] lg:text-[24px] text-[#E1FF26] leading-[14.13px] lg:leading-[19.94px] font-normal bg-[#014F59] px-6 py-4 lg:px-8 lg:py-6 w-full rounded-full flex items-center justify-center"
                      >
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
                      <p className=".f-HelveticaNeueRoman mt-6 text-[14px] text-[#014F59] leading-[20.52px] fomt-normal text-center">
                        By creating an account you agree with our{" "}
                        <span>
                          <u>Terms of Service, Privacy Policy,</u>{" "}
                        </span>
                        and our default{" "}
                        <span>
                          <u>Notification Settings</u>.
                        </span>
                      </p>
                      <p className=".f-HelveticaNeueRoman mt-6 text-[14px] text-[#014F59] leading-[20.52px] fomt-normal text-center">
                        Already have an account?{" "}
                        <span className="text-[#7D22FF]">
                          <u>Sign In</u>
                        </span>
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
            <div className="mt-7 flex justify-center block lg:hidden">
            <img src="images/signup-image.png" alt="" />
          </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default EcosystemSignup;
