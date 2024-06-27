import React from 'react';
import './FillInYourDetails.css';

const FillInYourDetails = () => {
  return (
    <section className="lg-bg-color fillinyourdetails min-h-[100vh]">
      <div className="container mx-auto relative">
        {/* <div className="flex py-6">
          <img src="src/assets/cooasis.svg" alt="" />
          <img src="src/assets/beta.svg" alt="" className="mb-[-16px] ml-2" />
        </div>
        <div>
          <img src="images/ManAvatar.svg" alt="" className="absolute top-0 right-0 py-6 max-w-[42px] max-h-[42px] rounded-full" />
        </div> */}
        <div className="bg-[#FFFFFF80] border-[1px] border-[#014F5917] rounded-[30px] py-4 px-6 xxl:p-6">
          <div>
            <h2 className="f-PowerGrotesk text-[40px] xxl:text-[53px] text-[#014F59] leading-[64.18px]">Fill in your details</h2>
            <p className="f-HelveticaNeueLight max-w-[700px] xxl:max-w-[820px] text-[18px] xxl:text-[24px] text-[#014F59B0] leading-[25px] xxl:leading-[35.18px] mt-1">Provide us your personal details so that our AI can assign you work based on your expertise and interests</p>
          </div>
          <div className="grid grid-cols-10 gap-12 mt-6">
            <div className="col-span-3">
              <div className="bg-[#FFFFFFC2] border-[1px] border-[#014F5921] rounded-[40px] px-6 py-4 xxl:p-6">
                <div>
                  <img src="images/ManAvatar.svg" alt="" className="rounded-full mx-auto max-w-[40%] xxl:max-w-[100%]" />
                  <p className="f-HelveticaNeueLight text-[14px] xxl:text-[16px] text-[#014F59] leading-[19.38px] text-center bg-[#F2F2F2] max-w-[136px] mt-2 mx-auto py-2 px-4 rounded-full">Change Avatar</p>
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
            <div className="col-span-7">
              <form>
                <div className="grid grid-cols-2 max-w-[700px] gap-7">
                  <div>
                    <label for="name" class="f-HelveticaNeueLight ml-2 block text-[15px] xxl:text-[17px] text-[#014F59] leading-[20.59px]">Name</label>
                    <input type="name" id="name" aria-describedby="helper-text-explanation" class="f-HelveticaNeueUltraLight mt-2 text-[15px] xxl:text-[17px] text-[#014F5980] leading-[14.13px] border-[1px] border-[#014F5917] rounded-full py-5 xxl:py-6 px-8 block w-full p-2.5" placeholder="Eg.  Jeff Bezoz" />
                  </div>

                  <div>
                    <label for="username" class="f-HelveticaNeueLight ml-2 block text-[15px] xxl:text-[17px] text-[#014F59] leading-[20.59px]">Username</label>
                    <input type="username" id="username" aria-describedby="helper-text-explanation" class="f-HelveticaNeueLight mt-2 text-[15px] xxl:text-[17px] text-[#014F59] leading-[14.13px] border-[1px] border-[#014F5917] rounded-full py-5 xxl:py-6 px-8 block w-full p-2.5" placeholder="@thecreativeguy" />
                    <p class="f-HelveticaNeueLight flex items-start ml-3 pt-4 text-[15px] xxl:text-[17px] text-[#014F5980] leading-[14.13px]"><span className="mr-2"><img src="images/icon.svg" alt="" className="max-w-[14px] max-h-[13px]" /></span> Did not liked the username ? Shuffle and get another one !</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 max-w-[700px] gap-7 mt-2">
                  <div>
                    <label for="name" class="f-HelveticaNeueLight ml-2 block text-[15px] xxl:text-[17px] text-[#014F59] leading-[20.59px]">Mobile</label>
                    <input type="name" id="name" aria-describedby="helper-text-explanation" class="f-HelveticaNeueUltraLight mt-2 text-[15px] xxl:text-[17px] text-[#014F5980] leading-[14.13px] border-[1px] border-[#014F5917] rounded-full py-5 xxl:py-6 px-8 block w-full p-2.5" placeholder="+91" />
                  </div>

                  <div>
                    <label for="username" class="f-HelveticaNeueLight ml-2 block text-[15px] xxl:text-[17px] text-[#014F59] leading-[20.59px]">Date of Birth</label>
                    <input type="username" id="username" aria-describedby="helper-text-explanation" class="f-HelveticaNeueUltraLight mt-2 text-[15px] xxl:text-[17px] text-[#014F5980] leading-[14.13px] border-[1px] border-[#014F5917] rounded-full py-5 xxl:py-6 px-8 block w-full p-2.5" placeholder="dd/mm/yyyy" />
                  </div>
                </div>
                <button className="f-PowerGrotesk text-[18px] xxl:text-[24px] text-[#E1FF26] leading-[19.94px] bg-[#014F59] max-w-[287px] max-h-[83px] rounded-full py-5 xxl:py-6 px-10 mt-10 xxl:mt-14">Save and proceed</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FillInYourDetails
