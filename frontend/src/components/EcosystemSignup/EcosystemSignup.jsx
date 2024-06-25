import React, { useState } from 'react';
import './EcosystemSignup.css';
import Button from '../Buttons/Buttons';
import { Link } from 'react-router-dom';

const EcosystemSignup = () => {
  const [showOnClic, setShowOnClic] = useState(false);

  const clickOnNextBtn = ()=> {
    setShowOnClic(true)
  }

   return (
    <section className="signup-page px-6 xl:px-[36px] pt-7">
      <div className="mx-auto md:px-10 max-w-[1700px]">
        <div className="flex">
          <img src="src/assets/cooasis.svg" alt="" />
          <img src="src/assets/beta.svg" alt="" className="mb-[-16px] ml-2" />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-100px)] items-center'>
          <div className={`col-span-6 lg:block ${showOnClic ? 'hidden': ''}`}>
            <div className="!relative md:mt-[5%] lg:mt-[10%]">
              <h1 className="media text-[60px] sm:text-[80px] lg:text-[60px] text-[#014F59] leading-[60px] sm:leading-[70px] lg:leading-[50px] sing-up-title xl:max-w-[686px] text-center lg:text-left mt-16 ">Nex-gen design
                ecosystem</h1>
              <div className="hidden lg:block">
                <Button size="w-[108.85px] h-[41px] text-[15px] leading-[18px] font-normal rounded-full !absolute top-[-28px] left-[24px]">Projects</Button>
                <Button size="w-[120px] h-[41px] text-[15px] leading-[18px] font-normal rounded-full !absolute top-[-19px] right-[115px]">Showcase</Button>
                <Button size="w-[102px] h-[41px] text-[15px] leading-[18px] font-normal rounded-full !absolute !bottom-[-3px] left-[266px]">Unskill</Button>
                <Button size="w-[135px] h-[41px] text-[15px] leading-[18px] font-normal rounded-full !absolute bottom-[-80px] left-[140px]">Collaborate</Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start mt-16 lg:mt-0">
              <img src="src/assets/login-center.png" alt="" className="sing-up-img" />
            </div>
            {/* Only For Mobiles Screen Content Start */}
            <div className="block lg:hidden bg-[#014F59] py-6 rounded-full mt-20">
              <button onClick={clickOnNextBtn} className="text-[24px] md:text-[33px] text-[#E1FF26] leading-[14.13px] font-normal w-full">Next</button>
            </div>
            {/* Only For Mobiles Screen Content End */}
            {/* Only For Mobiles Screen Content Start */}

           

            {/* Only For Mobiles Screen Content End */}
            <div>
            </div>
          </div>
          <div className={`col-span-6 lg:pl-14 lg:block ${ showOnClic ? '': 'hidden'}`}>
            <div className="res-adjust bg-white rounded-[40px] lg:rounded-[25px] mt-10 lg:mt-0 border-[1px] border-[#014F5921] p-4 sm:p-8 xl:px-[10%] max-w-[355px] sm:max-w-[455px] md:max-w-[555px] lg:max-w-auto mx-auto">
              <h2 className="text-[35px] lg:text-[50px] leading-[29.08px] text-[#014F59] text-center mt-2 lg:mt-0 sing-up-title">Sign up</h2>
              <form>
                <div className="mb-3 mt-8 lg:mt-6 xl:mt-[5%] flex items-center relative">
                  <input
                    type="email"
                    id="email"
                    placeholder="Eg. Jeff@cooasis.in"
                    className="f-HelveticaNeueUltraLight text-[12px] lg:text-[17px] text-[#014F5980] leading-[9.97px] font-extralight w-full px-6 py-4 lg:px-8 lg:py-6 border-[1px] border-[#014F5917] rounded-full focus:outline-none focus:ring-2"
                  />
                  <img src="src/assets/email-2.svg" alt="" className="absolute right-[35px]" />
                </div>
                <div className="mb-4 lg:mb-6 flex items-center relative">
                  <input
                    type="password"
                    id="password"
                    placeholder="At least 12 characters"
                    className="f-HelveticaNeueUltraLight text-[12px] lg:text-[17px] text-[#014F5980] leading-[9.97px] font-extralight w-full px-6 py-4 lg:px-8 lg:py-6 border-[1px] border-[#014F5917] rounded-full focus:outline-none focus:ring-2"
                  />
                  <img src="src/assets/hidden.svg" alt="" className="absolute right-[35px] hidden lg:block" />
                </div>
              </form>
              <div className="my-4 text-center text-gray-500">OR</div>
              <Link to="/verify" className="sing-up-title text-[16px] lg:text-[24px] text-[#E1FF26] leading-[14.13px] lg:leading-[19.94px] font-normal bg-[#014F59] px-6 py-4 lg:px-8 lg:py-6 w-full rounded-full flex items-center justify-center">
                <span className="mr-2">
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="h-5 w-5 mr-2" />
                </span>
                Signup using Google
              </Link>
           <div className="hidden lg:block">
           <p className=".f-HelveticaNeueRoman mt-6 text-[14px] text-[#014F59] leading-[20.52px] fomt-normal text-center">
                By creating an account you agree with our <span><u>Terms of Service, Privacy Policy,</u> </span>
                and our default <span><u>Notification Settings</u>.</span>
              </p>
              <p className=".f-HelveticaNeueRoman mt-6 text-[14px] text-[#014F59] leading-[20.52px] fomt-normal text-center">
                Already have an account? <span className="text-[#7D22FF]"><u>Sign In</u></span>
              </p>
           </div>
            </div>
            {/* Only For Mobiles Screen Start */}
            <div className="block lg:hidden">
            <p className=".f-HelveticaNeueRoman mt-5 text-[12px] text-[#014F59] leading-[17.59px] fomt-normal text-center">
                By creating an account you agree with our <span><u>Terms of Service, Privacy Policy,</u> </span>
                and our default <span><u>Notification Settings</u>.</span>
              </p>
              <p className=".f-HelveticaNeueRoman mt-3 text-[12px] text-[#014F59] leading-[17.59px] fomt-normal text-center">
                Already have an account? <span className="text-[#7D22FF]"><u>Sign In</u></span>
              </p>
              <div className="mt-4 flex justify-center">
                <img src="src/assets/signup-image.png" alt="" />
              </div>
            </div>
             {/* Only For Mobiles Screen End */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EcosystemSignup