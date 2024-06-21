import React from 'react'
import './EcosystemSignup.css';

const EcosystemSignup = () => {
  return (
    <section className="signup-page">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-12">
          <div className="col-span-7">
            <div className="flex py-8">
              <img src="src/assets/cooasis.svg" alt="" />
              <img src="src/assets/beta.svg" alt="" className="mb-[-16px] ml-2" />
            </div>
            <div>
              <h1 className="text-[60px] text-[#014F59] leading-[50px] font-normal max-w-[686px]">Nex-gen design
                ecosystem</h1>
            </div>
            <div className="mt-4">
              <img src="src/assets/login-center.png" alt="" className="max-w-[430px]" />
            </div>
          </div>
          <div className="col-span-5">
            <div className="flex items-center justify-center min-h-screen">
              <div className="bg-white p-8 rounded-[25px] border-[1px] border-[solid] border-[#014F5921] p-8">
                <h2 className="text-[50px] font-normal leading-[41.55px] text-[#014F59] mb-8 text-center mt-6">Sign up</h2>
                <form>
                  <div className="mb-4 mt-12 flex items-center relative">
                    <input
                      type="email"
                      id="email"
                      placeholder="Eg. Jeff@accces.in"
                      className="text-[17px] text-[#014F5980] leading-[14.13px] font-extralight w-full px-8 py-6 border-[1px] border-[solid] border-[#014F5917] rounded-full focus:outline-none focus:ring-2"
                    />
                     <img src="src/assets/email-2.svg" alt="" className="absolute right-[35px]" />
                  </div>
                  <div className="mb-6 flex items-center relative">
                    <input
                      type="password"
                      id="password"
                      placeholder="At least 12 characters"
                      className="text-[17px] text-[#014F5980] leading-[14.13px] font-extralight w-full px-8 py-6 border-[1px] border-[solid] border-[#014F5917] rounded-full focus:outline-none focus:ring-2"
                    />
                    <img src="src/assets/hidden.svg" alt="" className="absolute right-[35px]" />
                  </div>
                </form>
                <div className="my-4 text-center text-gray-500">OR</div>
                <button className="text-[24px] text-[#E1FF26] leading-[19.94px] font-normal bg-[#014F59] px-8 py-6 w-full rounded-full flex items-center justify-center">
                  <span className="mr-2">
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="h-5 w-5 mr-2" />
                  </span>
                  Signup using Google
                </button>
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
      </div>
    </section>
  )
}

export default EcosystemSignup
