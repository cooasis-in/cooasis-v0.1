import React, { useState, useEffect } from "react";
import StYourJourney from "../../startYourJourney/StYourJourney";

const VerifiedResp = () => {
  const [showNewComponent, setShowNewComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewComponent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showNewComponent) {
    return <StYourJourney />;
  }

  return (
    <section className="bg-color">
       <div className="text-center block lg:hidden">
      <div className="pt-[250px]">
        <img src="images/verify.svg" alt="" className="mx-auto !h-full" />
        <h3 className="f-PowerGrotesk text-[25px] text-[#014F59] leading-[22.77px] font-bold mt-2">
        email verified
        </h3>
      </div>
      <div className="flex justify-center">
        <div className="pt-[100px]">
          <img src="images/signup-image.png" alt="" />
        </div>
      </div>
    </div>
    </section>
  );
};

export default VerifiedResp;