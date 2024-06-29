import React from "react";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
  return (
    <div>
      <div className="hidden lg:flex justify-center">
        <img src="images/email.png" alt="Email Icon" className="h-16 w-16" />
      </div>
      <h2 className="f-PowerGrotesk text-[40px] font-bold leading-[41.55px] text-[#014F59] mb-8 text-center hidden lg:block">
        Verify your email
      </h2>
      <h2 className="f-PowerGrotesk text-[35px] font-bold text-[#014F59] mt-2 text-center block lg:hidden">
        Verify
      </h2>
      <form>
        <div className="mb-4 flex flex-col items-center justify-center relative">
          <p className="f-HelveticaNeueLight text-[12px] sm:text-[15px] leading-[17.59px] lg:leading-[14.13px] w-full text-center pt-4 pb-2 lg:py-6 text-[#5A5A5A] font-medium">
            Enter the 4-digit verification code sent to j*****@***.com
          </p>
          <p className="f-HelveticaNeueRoman text-[#C8C8C8]">Change email</p>
        </div>
        <div className="mt-6 lg:mt-0 mb-6 flex items-center justify-center relative">
          <input
            type="text"
            id="verification-code-1"
            placeholder=""
            className="readjustment text-[17px] text-[#014F5980] leading-[14.13px] font-extralight text-center w-16 h-16 border-[1px] border-[#014F5917] rounded-lg focus:outline-none focus:ring-2 mx-2"
          />
          <input
            type="text"
            id="verification-code-2"
            placeholder=""
            className="readjustment text-[17px] text-[#014F5980] leading-[14.13px] font-extralight text-center w-16 h-16 border-[1px] border-[#014F5917] rounded-lg focus:outline-none focus:ring-2 mx-2"
          />
          <input
            type="text"
            id="verification-code-3"
            placeholder=""
            className="readjustment text-[17px] text-[#014F5980] leading-[14.13px] font-extralight text-center w-16 h-16 border-[1px] border-[#014F5917] rounded-lg focus:outline-none focus:ring-2 mx-2"
          />
          <input
            type="text"
            id="verification-code-4"
            placeholder=""
            className="readjustment text-[17px] text-[#014F5980] leading-[14.13px] font-extralight text-center w-16 h-16 border-[1px] border-[#014F5917] rounded-lg focus:outline-none focus:ring-2 mx-2"
          />
        </div>
      </form>
      <div className="my-4 text-center text-gray-500">
        <a
          href="#"
          className="f-HelveticaNeueLight text-[#5A5A5A] text-[12px] lg:text-[18px] leading-[17.59px] font-light lg:font-medium"
        >
          <span className="text-[#C8C8C8]">Didn't get the code?</span> Click to
          resend
        </a>
      </div>
      <Link
        to="/verified"
        className="f-PowerGrotesk text-[17px] lg:text-[24px] text-[#E1FF26] leading-[14.13px] lg:leading-[19.94px] font-normal bg-[#014F59] px-6 py-4 lg:px-8 lg:py-6 w-full rounded-full flex items-center justify-center"
      >
        Verify Account
      </Link>
      <div className="flex items-center justify-center">
        <button
          onClick={() => setShowVerificationForm(false)}
          className="f-HelveticaNeueRoman text-[16px] text-[#C8C8C8] leading-[20px] font-medium bg-transparent px-6 py-3 w- rounded-full mt-4 hidden lg:block"
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
    </div>
  );
};

export default VerifyEmail;
