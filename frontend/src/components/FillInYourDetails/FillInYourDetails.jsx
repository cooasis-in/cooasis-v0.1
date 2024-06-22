import React from 'react';
import './FillInYourDetails.css';

const FillInYourDetails = () => {
  return (
    <section className="fillinyourdetails">
      <div className="container mx-auto relative">
        <div className="flex py-6">
          <img src="src/assets/cooasis.svg" alt="" />
          <img src="src/assets/beta.svg" alt="" className="mb-[-16px] ml-2" />
        </div>
        <div>
          <img src="src/assets/man.svg" alt="" className="absolute top-0 right-0 py-6" />
        </div>
        <div className="bg-[#FFFFFF80] border-[1px] border-[#014F5917] rounded-[30px] min-h-[80vh] mt-10">
          <div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default FillInYourDetails
