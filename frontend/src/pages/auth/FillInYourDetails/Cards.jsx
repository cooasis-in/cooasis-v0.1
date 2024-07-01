import React from 'react'

function reuseble() {
  return (
    <div className="col-span-3">
      <div className="bg-[#FFFFFFC2] border-[1px] border-[#014F5921] rounded-[40px] px-6 py-4 xxl:p-6">
        <div>
          <img src="images/ManAvatar.svg" alt="" className="rounded-full mx-auto max-w-[40%] xxl:max-w-[100%]" />
          <p className="f-HelveticaNeueLight text-[14px] xxl:text-[16px] text-[#014F59] leading-[19.38px] text-center bg-[#FFFFFF80] max-w-[136px] mt-2 mx-auto py-2 px-4 rounded-full">Change Avatar</p>
        </div>
        <div className="mt-6 xxl:mt-10">
          <ul>
            <li className="f-HelveticaNeueLight relative my-3 xxl:my-5 flex items-center text-[16px] text-[#014F59] leading-[19.38px]">
              <span><img src="images/icon-1.svg" alt="" className="mr-3 w-[24px] h-[24px]" /></span>
              Personal Details
              <span className="absolute right-0"><img src="images/right-arrow.svg" alt="" /></span>
            </li>

            <li className="f-HelveticaNeueLight relative my-3 xxl:my-5 flex items-center text-[16px] text-[#014F59] leading-[19.38px]">
              <span><img src="images/icon-2.svg" alt="" className="mr-3" /></span>
              Professional Details
              <span className="absolute right-0"><img src="images/right-arrow.svg" alt="" /></span>
            </li>

            <li className="f-HelveticaNeueLight relative my-3 xxl:my-5 flex items-center text-[16px] text-[#014F59] leading-[19.38px]">
              <span><img src="images/icon-3.svg" alt="" className="mr-3" /></span>
              Expertise
              <span className="absolute right-0"><img src="images/right-arrow.svg" alt="" /></span>
            </li>

            <li className="f-HelveticaNeueLight relative my-3 xxl:my-5 flex items-center text-[16px] text-[#014F59] leading-[19.38px]">
              <span><img src="images/icon-4.svg" alt="" className="mr-3" /></span>
              Availability
              <span className="absolute right-0"><img src="images/right-arrow.svg" alt="" /></span>
            </li>

            <li className="f-HelveticaNeueLight relative mt-3 xxl:mt-5 flex items-center text-[16px] text-[#014F59] leading-[19.38px]">
              <span><img src="images/icon-5.svg" alt="" className="mr-3" /></span>
              Portfolio
              <span className="absolute right-0"><img src="images/right-arrow.svg" alt="" /></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default reuseble
