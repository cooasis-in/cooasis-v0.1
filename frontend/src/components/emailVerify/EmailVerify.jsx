import React from "react";
import Button from "../Buttons/Buttons";
import './EmailVerify.css';

const EmailVerify = () => {
  return (
    <section className="signup-page px-6 xl:px-[36px] pt-7">
      <div className="mx-auto px-0 lg:px-10 max-w-[1700px]">
        <div className="flex">
          <img src="src/assets/cooasis.svg" alt="" />
          <img src="src/assets/beta.svg" alt="" className="mb-[-16px] ml-2" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-100px)] items-center">
          <div className="col-span-6 hidden lg:block">
            <div className="!relative mt-16 md:mt-[10%]">
              <h1 className="text-[60px] text-[#014F59] leading-[50px] font-normal max-w-[686px]">
                Nex-gen design ecosystem
              </h1>
              <Button size="w-[108.85px] h-[41px] text-[15px] leading-[18px] font-normal rounded-full !absolute top-[-28px] left-[24px]">
                Projects
              </Button>
              <Button size="w-[120px] h-[41px] text-[15px] leading-[18px] font-normal rounded-full !absolute top-[-19px] right-[115px]">
                Showcase
              </Button>
              <Button size="w-[102px] h-[41px] text-[15px] leading-[18px] font-normal rounded-full !absolute !bottom-[-3px] left-[266px]">
                Unskill
              </Button>
              <Button size="w-[135px] h-[41px] text-[15px] leading-[18px] font-normal rounded-full !absolute bottom-[-80px] left-[140px]">
                Collaborate
              </Button>
            </div>
            <div>
              <img
                src="src/assets/login-center.png"
                alt=""
                className="sing-up-img"
              />
            </div>
            <div></div>
          </div>
          {/* Verify Email */}
          {/* hidden hatana hai */}
          <div className="col-span-6 lg:pl-14 hidden lg:block">
            <div className="res-adjust bg-white rounded-[40px] lg:rounded-[25px] mt-10 lg:mt-0 border-[1px] border-[#014F5921] p-4 sm:p-8 xl:px-[10%] max-w-[355px] sm:max-w-[455px] md:max-w-[555px] lg:max-w-auto mx-auto">
              <div className="flex justify-center hidden lg:block">
                <img
                  src="src/assets/email.png"
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
                  <p className="text-[12px] sm:text-[15px] leading-[17.59px] lg:leading-[14.13px] w-full text-center pt-4 pb-2 lg:py-6 text-[#5A5A5A]  font-medium">
                    Enter 4-digit verification code sent to j*****@***.com
                  </p>
                  <p className="text-[#C8C8C8]">Change email</p>
                </div>
                <div className="mt-6 lg:mt-0 mb-6 flex items-center justify-center relative">
                  <input
                    type="text"
                    id="verification-code"
                    placeholder=""
                    className="readjustment text-[17px] text-[#014F5980] leading-[14.13px] font-extralight text-center w-20 h-16 border-[1px] border-[#014F5917] rounded-lg focus:outline-none focus:ring-2 mx-2"
                  />
                  <input
                    type="text"
                    id="verification-code"
                    placeholder=""
                    className="readjustment text-[17px] text-[#014F5980] leading-[14.13px] font-extralight text-center w-20 h-16 border-[1px] border-[#014F5917] rounded-lg focus:outline-none focus:ring-2 mx-2"
                  />
                  <input
                    type="text"
                    id="verification-code"
                    placeholder=""
                    className="readjustment text-[17px] text-[#014F5980] leading-[14.13px] font-extralight text-center w-20 h-16 border-[1px] border-[#014F5917] rounded-lg focus:outline-none focus:ring-2 mx-2"
                  />
                  <input
                    type="text"
                    id="verification-code"
                    placeholder=""
                    className="readjustment text-[17px] text-[#014F5980] leading-[14.13px] font-extralight text-center w-20 h-16 border-[1px] border-[#014F5917] rounded-lg focus:outline-none focus:ring-2 mx-2"
                  />
                </div>
              </form>
              <div className="my-4 text-center text-gray-500">
                <a href="#" className="text-[#5A5A5A] text-[12px] lg:text-[18px] leading-[17.59px] font-light lg:font-medium">
                  <span className="text-[#C8C8C8]">Didn't get the code?</span>{" "}
                  Click to resend
                </a>
              </div>
              <button className="text-[17px] lg:text-[24px] text-[#E1FF26] leading-[14.13px] lg:leading-[19.94px] font-normal bg-[#014F59] px-6 py-4 lg:px-8 lg:py-6 w-full rounded-full flex items-center justify-center">
                Verify Account
              </button>
              <div className=" flex items-center justify-center">
                <button className="text-[16px] text-[#C8C8C8] leading-[20px] font-medium bg-transparent px-6 py-3 w- rounded-full mt-4 hidden lg:block">
                  Cancel
                </button>
                <button className="text-[12px] text-[#C8C8C8] leading-[17.59px] font-normal bg-transparent px-6 py-3 w- rounded-full block lg:hidden">
                  Cancel
                </button>
              </div>
            </div>
            <div className="mt-7 flex justify-center block lg:hidden">
              <img src="src/assets/signup-image.png" alt="" />
            </div>
          </div>
          {/* verify page */}
          <div className="text-center block lg:hidden">
            <div className="mt-[-4rem]">
              <img src="src\assets\verify.svg" alt="" className="mx-auto" />
              <h3 className="text-[25px] text-[#014F59] leading-[22.77px] font-normal mt-4">email verified</h3>
            </div>
            <div className="flex justify-center">
              <div className="absolute bottom-0">
              <img src="src/assets/signup-image.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailVerify;
