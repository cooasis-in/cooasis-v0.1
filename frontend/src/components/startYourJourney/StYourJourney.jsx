import React from "react";
import "./stYurJourney.css";
import Button from "../../components/Buttons/Buttons";
import { Link } from "react-router-dom";

const StYourJourney = () => {
  return (
    <section className="signup-page  ">
      <div className="container mx-auto px-10 max-w-[1700px] relative">
        <div className="grid grid-cols-1  lg:grid-cols-12 items-center p-4">
          <div className="col-span-6">
            <h1 className="text-[#014F59] text-center text-2xl lg:text-left lg:text-6xl font-bold mb-8 lg:mb-12  leading-6 lg:mt-8 mt-10">
              Ready to start your journey?
            </h1>
            <div className=" mt-[80px] lg:mt-2">
              <ul className="space-y-8">
                <li className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#014F59] text-white flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div>
                    <p className="font-semibold">Create your Account</p>
                    <p className="text-gray-600">
                      Discover the do's and don'ts to ensure you're always on
                      the right track.
                    </p>
                  </div>
                </li>
                <hr />
                <li className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#014F59] text-white flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div>
                    <p className="font-semibold">Fill in your details</p>
                    <p className="text-gray-600">
                      Add your profile picture, description, and professional
                      information.
                    </p>
                  </div>
                </li>
                <hr />
                <li className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#014F59] text-white flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div>
                    <p className="font-semibold">Proceed with test series</p>
                    <p className="text-gray-600">
                      Create a Gig of the service you're offering and start
                      selling instantly.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <Link to="/refer">
              <button className="mt-[120px] mb-6 lg:mt-8 bg-[#014F59] text-[#E1FF26] py-4 px-8 rounded-full text-base font-normal w-full lg:w-[160px]">
                Continue
              </button>
            </Link>
          </div>
          <div className="hidden relative lg:flex col-span-6 justify-center lg:justify-end mt-10 lg:mt-0">
            <img
              src="images/startjourneylogo.png"
              alt="Start Journey Logo"
              className="max-w-[400px]"
            />
            <div className=" absolute">
              <Button size=" w-[100.85px] h-[41px] text-[15px] leading-[18px] font-normal rounded-full top-[170px] right-[220px]">
                Unskill
              </Button>

              <Button size=" w-[100.85px] h-[41px] text-[15px] leading-[18px] font-normal rounded-full top-[110px] right-[60px]">
                Projects
              </Button>
              <div className="mt-[240px]">
                <Button size=" w-[100.85px] h-[41px] text-[15px] leading-[18px] font-normal rounded-full top-[80px] right-[100px]">
                  Projects
                </Button>
                <Button size=" w-[100.85px] h-[41px] text-[15px] leading-[18px] font-normal rounded-full top-[130px] right-[250px]">
                  Projects
                </Button>
              </div>
            </div>

            <div className="absolute flex mt-[250px]">
              <img
                src="images/Union.png"
                alt="Union"
                className="max-w-[300px] h-[80px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StYourJourney;
