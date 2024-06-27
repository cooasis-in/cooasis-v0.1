import React from "react";
import PenTool from "./PenTool";

function PenToolUi() {
  return (
    <div className=" bg-[#FFF5D94D] flex items-center justify-center">
      <div className="container grid grid-flow-col-12 bg-white border mt-10 rounded-[30px] overflow-hidden  w-full h-full ">
        <div className="p-6 flex justify-between">
          <h1 className="text-[50px] font-semibold leading-[50px] text-[#014F59]">
            How accurate you are using a <br /> pen tool?
          </h1>
          <div className="flex justify-between items-center mb-16 gap-2">
            <span className="text-sm font-normal text-[#014F59]">1/5 assessment</span>
            <div className="bg-[#E1FF2666] text-[#004744] p-4 px-8 rounded-full">
              05:49:03
            </div>
          </div>
        </div>
        <div className="flex">
          {/* Contenet */}
          <div className=" grid-cols-4 bg-[#FFF5D94D] p-6 border rounded-[30px] m-6">
            <h2 className="text-lg font-medium text-[#004744] mb-4">
              Trace this shape with pen tool
            </h2>
            <p className="text-sm text-[#8E8E8E] mb-6">
              To understand the interface, we are giving one mock task for{" "}
              <br /> you to get hands-on.
              <p>
                There's nothing new; you can use all your keyboard <br />{" "}
                shortcuts which you use in your design software.
              </p>
            </p>
            <button className="mt-[120px] mb-6 lg:mt-8 bg-[#014F59] text-[#E1FF26] py-4 px-8 rounded-full text-base font-normal w-[180px] ">
              Submit & Next
            </button>
          </div>
          {/* Editor Part */}
          <div className="grid col-span-8 justify-center p-6 items-center relative">
            <PenTool className="absolute inset-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PenToolUi;
