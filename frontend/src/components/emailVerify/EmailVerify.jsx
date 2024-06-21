import React from "react";
// import "./EcosystemSignup.css";
import Button from "../Buttons/Buttons";

const EmailVerify = () => {
  return (
    <section className="signup-page">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-12">
          <div className="col-span-7">
            <div className="flex py-8">
              <img src="src/assets/cooasis.svg" alt="" />
              <img
                src="src/assets/beta.svg"
                alt=""
                className="mb-[-16px] ml-2"
              />
            </div>
            <div className="!relative mt-4">
              <h1 className="text-[60px] text-[#014F59] leading-[50px] font-normal max-w-[686px]">
                Nex-gen design ecosystem
              </h1>
              <Button size="w-[108.85px] h-[41px] text-[15px] leading-[18px] font-normal rounded-full !absolute top-[-28px] left-[24px]">
                Projects
              </Button>
              <Button size="w-[120px] h-[41px] text-[15px] leading-[18px] font-normal rounded-full !absolute top-[-19px] right-[214px]">
                Showcase
              </Button>
              <Button size="w-[102px] h-[41px] text-[15px] leading-[18px] font-normal rounded-full !absolute !bottom-[-3px] left-[266px]">
                Unskill
              </Button>
              <Button size="w-[135px] h-[41px] text-[15px] leading-[18px] font-normal rounded-full !absolute bottom-[-80px] left-[100px]">
                Collaborate
              </Button>
            </div>
            <div>
              <img
                src="src/assets/login-center.png"
                alt=""
                className="max-w-[430px] max-h-[385px]"
              />
            </div>
          </div>
          {/* Verify Email */}
          <div className="col-span-5">
            <div className="flex items-center justify-center min-h-screen ">
              <div className="bg-white rounded-[25px] border-[1px] border-[#014F5921] p-8">
              <div className="flex justify-center mb-">
                  <img
                    src="src/assets/email.png"
                    alt="Email Icon"
                    className="h-16 w-16"
                  />
                </div>
                <h2 className="text-[40px] font-bold leading-[41.55px] text-[#014F59] mb-8 text-center">
                  Verify your email
                </h2>
                <form>
                  <div className="mb-4 mt-12 flex flex-col items-center justify-center relative">
                    <p className="text-[15px] leading-[14.13px] w-full px-8 py-6 text-[#5A5A5A]  font-medium">
                      Enter 4-digit verification code sent to j*****@***.com
                    </p>
                    <p className="text-[#C8C8C8]">Change email</p>
                  </div>
                  <div className="mb-6 flex items-center justify-center relative">
                    <input
                      type="text"
                      id="verification-code"
                      placeholder=""
                      className="text-[17px] text-[#014F5980] leading-[14.13px] font-extralight text-center w-20 h-16 border-[1px] border-[#014F5917] rounded-md focus:outline-none focus:ring-2 mx-2"
                    />
                    <input
                      type="text"
                      id="verification-code"
                      placeholder=""
                      className="text-[17px] text-[#014F5980] leading-[14.13px] font-extralight text-center w-20 h-16 border-[1px] border-[#014F5917] rounded-md focus:outline-none focus:ring-2 mx-2"
                    />
                    <input
                      type="text"
                      id="verification-code"
                      placeholder=""
                      className="text-[17px] text-[#014F5980] leading-[14.13px] font-extralight text-center w-20 h-16 border-[1px] border-[#014F5917] rounded-md focus:outline-none focus:ring-2 mx-2"
                    />
                    <input
                      type="text"
                      id="verification-code"
                      placeholder=""
                      className="text-[17px] text-[#014F5980] leading-[14.13px] font-extralight text-center w-20 h-16 border-[1px] border-[#014F5917] rounded-md focus:outline-none focus:ring-2 mx-2"
                    />
                  </div>
                </form>
                <div className="my-4 text-center text-gray-500">
                  <a href="#" className="text-[#5A5A5A]  font-medium">
                    <span className="text-[#C8C8C8]">Didn't get the code?</span>{" "}
                    Click to resend
                  </a>
                </div>
                <button className="text-[24px] text-[#E1FF26] leading-[19.94px] font-normal bg-[#014F59] px-8 py-6 w-full rounded-full flex items-center justify-center">
                  Verify Account
                </button>
                <div className=" flex items-center justify-center">
                  <button className="text-[16px]  text-[#C8C8C8] leading-[20px] font-medium bg-transparent px-6 py-3 w- rounded-full mt-4">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailVerify;
