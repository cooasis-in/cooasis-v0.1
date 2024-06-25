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
    <div className="container mx-auto p-4  mt-12 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="heading text-center mb-14 col-span-full">
          <h1 className="text-4xl md:col-span-3 font-medium text-[#014F59]">
            Refer & Earn
          </h1>
        </div>
        <div className="border rounded-[40px] p-4 py-6 col-span-full sm:col-span-2 md:col-span-3 lg:col-span-4">
          <h1 className="text-center text-[#014F59] mb-6 leading-[20px] text-[20px] font-medium mt-8">
            Invite a friend and get <br /> INR 500
          </h1>
          <p className="text-center text-[#014F599C]">
            Invite your friend to make an account with your promo code and
            you’ll get INR500 on successful account creation*
          </p>

          <div className="flex flex-row sm:flex-row justify-center items-center mt-8 gap-4">
            {/* Button 1 */}
            <button className="text-lg text-[#014F59] gap-2 bg-white px-8 py-4 sm:py-6 rounded-full flex items-center justify-center w-full sm:w-auto border font-bold h-[70px]">
              <img
                src="images/paste.png"
                alt="Email Icon"
                className="h-8 w-8"
              />
              CCS552
            </button>
            {/* Button 2 */}
            <button className="text-base text-[#E1FF26] bg-[#014F59] px-8 py-4 sm:py-6 rounded-full flex items-center justify-center w-full sm:w-auto  font-normal h-[70px]">
              Invite friend
            </button>
          </div>
        </div>
        {/* Important notice */}
        <div className="relative md:col-span-3 bg-[#FF8E8E4D] text-center rounded-[35px] p-6 mt-4">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-[30px] opacity-50"
            style={{ backgroundImage: "url('/images/impBg.png')" }}
          ></div>
          <h1 className="relative text-xl text-[#FF5266] font-semibold mb-2 z-10">
            important
          </h1>
          <p className="relative text-[#FF8E8E] mt-4 z-10 text-[12px]">
            To proceed further we request you to continue with your desktop or
            PC as our product has few features which are not supported on
            mobile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReferEarn;
