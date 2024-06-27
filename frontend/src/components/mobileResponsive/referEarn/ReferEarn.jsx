import React, { useEffect, useState } from "react";
import "./referEarn.css";

const ReferEarn = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isSmallScreen) {
    return null;
  }

  return (
    <section className="bg-color !h-full">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="heading text-center mb-4 col-span-full">
            <h1 className="f-PowerGrotesk text-4xl md:col-span-3 text-[#014F59]">
              Refer & Earn
            </h1>
          </div>
          <div className="border rounded-[40px] p-4 py-6 col-span-full sm:col-span-2 md:col-span-3 lg:col-span-4">
            <h1 className="f-PowerGrotesk text-center text-[#014F59] mb-4 leading-[16.62px] text-[20px] mt-4">
              Invite a friend and get <br /> INR 500
            </h1>
            <p className="f-HelveticaNeueLight text-center mx-auto mt-8 text-[12px] text-[#014F599C] leading-[18px] max-w-[267px]">
              Invite your friend to make an account with your promo code and
              you’ll get INR500 on successful account creation*
            </p>

            <div className="flex flex-row sm:flex-row justify-center items-center mt-8 gap-4">
              {/* Button 1 */}
              <button className="text-lg text-[#014F59] gap-2 bg-white px-8 py-4 sm:py-6 rounded-full flex items-center justify-center w-full sm:w-auto border font-bold h-[57px] max-w-[146px]">
                <img
                  src="images/paste.png"
                  alt="Email Icon"
                  className="f-PowerGrotesk h-8 w-8"
                />
                CCS552
              </button>
              {/* Button 2 */}
              <button className="f-PowerGrotesk text-base text-[#E1FF26] bg-[#014F59] px-8 py-4 sm:py-6 rounded-full flex items-center justify-center w-full sm:w-auto  font-normal h-[57px] max-w-[164.5px]">
                Invite friend
              </button>
            </div>
          </div>
          {/* Important notice */}
          <div className="relative md:col-span-3 bg-[#FF8E8E4D] text-center rounded-[35px] p-6 mt-0">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-[30px] opacity-50"
              style={{ backgroundImage: "url('/images/impBg.png')" }}
            ></div>
            <h1 className="f-PowerGrotesk relative text-xl text-[#FF5266] font-semibold mb-2 z-10">
              important
            </h1>
            <p className="f-HelveticaNeueLight mx-auto text-center relative text-[#FF8E8E] mt-4 z-10 text-[12px] leading-[17.59px] max-w-[287px]">
              To proceed further we request you to continue with your desktop or
              PC as our product has few features which are not supported on
              mobile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferEarn;
