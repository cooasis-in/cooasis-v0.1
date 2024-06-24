import React from 'react';
import './EcosystemSignup.css';
import Button from '../Buttons/Buttons';
import { Link } from 'react-router-dom';

const EcosystemSignup = () => {

  return (
    <section className="signup-page px-6 xl:px-[36px] pt-7">
      <div className="mx-auto md:px-10 max-w-[1700px]">
        <div className="flex">
          <img src="src/assets/cooasis.svg" alt="" />
          <img src="src/assets/beta.svg" alt="" className="mb-[-16px] ml-2" />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-100px)] items-center'>
          <div className="col-span-6">
            <div className="!relative md:mt-[5%] lg:mt-[10%]">
              <h1 className="media text-[35px] sm:text-[80px] lg:text-[60px] text-[#014F59] leading-[60px] sm:leading-[70px] lg:leading-[50px] font-normal xl:max-w-[686px] text-center lg:text-left mt-16 ">Nex-gen design
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
            <div className="block lg:hidden bg-[#014F59] py-8 rounded-full mt-20">
              <button className="text-[24px] md:text-[33px] text-[#E1FF26] leading-[14.13px] font-normal w-full">Next</button>
            </div>
            <div>
            </div>
          </div>
          <div className="col-span-6 lg:pl-14 hidden lg:block">
            <div className="bg-white rounded-[25px] border-[1px] border-[#014F5921] py-8 px-8 xl:px-[10%]">
              <h2 className="text-[50px] font-normal text-[#014F59] text-center">Sign up</h2>
              <form>
                <div className="mb-4 mt-6 xl:mt-[5%] flex items-center relative">
                  <input
                    type="email"
                    id="email"
                    placeholder="Eg. Jeff@accces.in"
                    className="text-[17px] text-[#014F5980] leading-[14.13px] font-extralight w-full px-8 py-6 border-[1px] border-[#014F5917] rounded-full focus:outline-none focus:ring-2"
                  />
                  <img src="src/assets/email-2.svg" alt="" className="absolute right-[35px]" />
                </div>
                <div className="mb-6 flex items-center relative">
                  <input
                    type="password"
                    id="password"
                    placeholder="At least 12 characters"
                    className="text-[17px] text-[#014F5980] leading-[14.13px] font-extralight w-full px-8 py-6 border-[1px] border-[#014F5917] rounded-full focus:outline-none focus:ring-2"
                  />
                  <img src="src/assets/hidden.svg" alt="" className="absolute right-[35px]" />
                </div>
              </form>
              <div className="my-4 text-center text-gray-500">OR</div>
              <Link to="/verify" className="text-[24px] text-[#E1FF26] leading-[19.94px] font-normal bg-[#014F59] px-8 py-6 w-full rounded-full flex items-center justify-center">
                <span className="mr-2">
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="h-5 w-5 mr-2" />
                </span>
                Signup using Google
              </Link>
              <p className="mt-6 text-[14px] text-[#014F59] leading-[20.52px] fomt-normal text-center">
                By creating an account you agree with our <span><u>Terms of Service, Privacy Policy,</u> </span>
                and our default <span><u>Notification Settings</u>.</span>
              </p>
              <p className="mt-6 text-[14px] text-[#014F59] leading-[20.52px] fomt-normal text-center">
                Already have an account? <span className="text-[#7D22FF]"><u>Sign In</u></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EcosystemSignup