import React from "react";
import { useNavigate } from "react-router-dom";

export const QuizStartPopup = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-[1345px] h-[902px] flex bg-[#00000080]"
      data-model-id="11:3027"
    >
      <div className="mt-[236px] w-[768px] h-[430.18px] ml-[394px] flex flex-col bg-white rounded-[40px] overflow-hidden border-4 border-solid border-[#2b2622] shadow-[6px_6px_0px_#2b2622e6]">
        <div className="ml-[52px] w-[664px] h-[38.4px] mt-[52px] flex">
          <div className="mt-[2.5px] w-[292px] h-[39px] ml-[186.2px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#ef473a] text-[32px] text-center tracking-[-0.64px] leading-[38.4px] whitespace-nowrap">
            PREPARE YOUR QUIZ
          </div>
        </div>

        <div className="ml-[52px] w-[664px] h-[25.59px] flex">
          <div className="mt-[-0.3px] w-[117px] h-[26px] ml-[273.5px] [font-family:'Inter',Helvetica] font-normal text-[#6b6661] text-base text-center tracking-[0] leading-[25.6px]">
            Step 3 of 3
          </div>
        </div>

        <div className="flex ml-[52px] w-[664px] h-[148.19px] relative flex-col items-start">
          <div className="relative self-stretch w-full h-[28.59px]">
            <div className="absolute -top-px left-[230px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#1e5f4d] text-[22px] text-center tracking-[-0.22px] leading-[28.6px] whitespace-nowrap">
              Choose your topics
            </div>
          </div>

          <div className="relative self-stretch w-full h-[25.59px]">
            <p className="absolute -top-px left-[189px] [font-family:'Inter',Helvetica] font-normal text-[#6b6661] text-base text-center tracking-[0] leading-[25.6px] whitespace-nowrap">
              Select the topics you want to practice
            </p>
          </div>

          <div className="flex flex-col h-[94px] items-start gap-3 relative self-stretch w-full">
            <div className="relative self-stretch w-full h-5">
              <p className="absolute top-px left-0 [font-family:'Inter',Helvetica] font-semibold text-[#6b6661] text-sm tracking-[0] leading-5 whitespace-nowrap">
                Search or add custom topics:
              </p>
            </div>

            <div className="relative self-stretch w-full h-[62px]">
              <div className="flex w-[664px] h-[62px] items-center pl-14 pr-5 py-4 absolute top-0 left-0 bg-white rounded-[16777200px] overflow-hidden border-[3px] border-solid border-[#2b2622]">
                <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#6b6661] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  Search for a topic...
                </div>
              </div>

              <img
                className="top-[21px] left-5 absolute w-5 h-5"
                alt="Icon"
                src="https://c.animaapp.com/3MbVCgJS/img/icon.svg"
              />
            </div>
          </div>
        </div>

        <div className="flex ml-[52px] w-[664px] h-[66px] relative mt-12 items-start gap-4">
          <button onClick={() => navigate('/quiz/setup/step2')} className="all-[unset] box-border w-[161.5px] relative h-[66px] rounded-[16777200px] border-[3px] border-solid border-[#2b2622] cursor-pointer hover:bg-[#f5ebe0] transition-colors">
            <img
              className="top-[23px] left-[43px] absolute w-5 h-5"
              alt="Icon"
              src="https://c.animaapp.com/3MbVCgJS/img/icon-1.svg"
            />

            <div className="absolute top-[22px] left-[74px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-base text-center tracking-[0.32px] leading-6 whitespace-nowrap">
              BACK
            </div>
          </button>

          <button onClick={() => navigate('/quiz/active')} className="all-[unset] box-border flex-1 grow bg-[#1e5f4d] shadow-[5px_5px_0px_#2b2622d9] relative h-[66px] rounded-[16777200px] border-[3px] border-solid border-[#2b2622] cursor-pointer hover:shadow-[3px_3px_0px_#2b2622d9] transition-all">
            <div className="absolute top-[22px] left-[185px] [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-base text-center tracking-[0.32px] leading-6 whitespace-nowrap">
              START QUIZ
            </div>

            <img
              className="top-[23px] left-[286px] absolute w-5 h-5"
              alt="Icon"
              src="https://c.animaapp.com/3MbVCgJS/img/icon-2.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
