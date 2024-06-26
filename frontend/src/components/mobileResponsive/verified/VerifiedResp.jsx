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
    <div className="text-center sm:block lg:hidden">
      <div className="mt-[250px]">
        <img src="images/verify.svg" alt="" className="mx-auto" />
        <h3 className="text-[25px] text-[#014F59] leading-[22.77px] font-bold mt-4">
          Email verified
        </h3>
      </div>
      <div className="flex justify-center">
        <div className="absolute bottom-0">
          <img src="images/signup-image.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default VerifiedResp;
