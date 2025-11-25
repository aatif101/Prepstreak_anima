import React from "react";
import { useNavigate } from "react-router-dom";

export const Frame = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full min-w-[1390px] min-h-[994px] flex"
      data-model-id="5:231"
    >
      <div className="flex w-[1390px] h-[994px] relative flex-col items-start pt-16 pb-0 px-[311px] bg-[linear-gradient(180deg,rgba(245,235,224,1)_0%,rgba(253,246,237,1)_100%)]">
        <div className="relative self-stretch w-full h-[866.56px] bg-white rounded-[40px] border-4 border-solid border-[#2b2622] shadow-[6px_6px_0px_#2b2622e6]">
          <div className="absolute top-[102px] left-[52px] w-[664px] h-[62px] flex flex-col gap-[11.9px]">
            <div className="ml-[93.2px] w-[479px] h-[62px] mt-[-38.5px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#ef473a] text-[56px] text-center tracking-[-1.12px] leading-[61.6px] whitespace-nowrap">
              Welcome, Learner!
            </div>

            <div className="w-[670px] flex">
              <p className="-mt-px w-[411px] h-[26px] ml-[127.3px] [font-family:'Inter',Helvetica] font-bold text-[#1e5f4d] text-2xl text-center tracking-[0] leading-[25.6px] whitespace-nowrap">
                Let&#39;s customize your learning path.
              </p>
            </div>
          </div>

          <div className="flex flex-col w-[664px] h-[91px] items-start absolute top-[189px] left-[52px]">
            <div className="relative self-stretch w-full h-[35px]">
              <div className="absolute top-px left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#1e5f4d] text-[22px] tracking-[-0.22px] leading-[28.6px] whitespace-nowrap">
                What&#39;s your skill level?
              </div>
            </div>

            <div className="flex h-[62px] items-start gap-4 pl-0 pr-[0.01px] py-0 relative self-stretch w-full mb-[-6.41px]">
              <button className="all-[unset] box-border relative flex-1 grow h-[62px] bg-[#ef473a] rounded-[16777200px] border-[3px] border-solid border-[#2b2622] shadow-[3px_3px_0px_#2b2622b2]">
                <div className="absolute top-5 left-[69px] [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-base text-center tracking-[0.32px] leading-6 whitespace-nowrap">
                  Beginner
                </div>
              </button>

              <button className="all-[unset] box-border relative flex-1 grow h-[62px] bg-white rounded-[16777200px] border-[3px] border-solid border-[#2b2622]">
                <div className="absolute top-5 left-[54px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-base text-center tracking-[0.32px] leading-6 whitespace-nowrap">
                  Intermediate
                </div>
              </button>

              <button className="all-[unset] box-border relative flex-1 grow h-[62px] bg-white rounded-[16777200px] border-[3px] border-solid border-[#2b2622]">
                <div className="absolute top-5 left-[66px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-base text-center tracking-[0.32px] leading-6 whitespace-nowrap">
                  Advanced
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-col w-[664px] h-[91px] items-start absolute top-[319px] left-[52px]">
            <div className="relative self-stretch w-full h-[28.59px]">
              <div className="absolute top-[-7px] left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#1e5f4d] text-[22px] tracking-[-0.22px] leading-[28.6px] whitespace-nowrap">
                Pick your daily time.
              </div>
            </div>

            <div className="flex h-[62px] items-start gap-4 pl-0 pr-[0.01px] py-0 relative self-stretch w-full">
              <button className="all-[unset] box-border relative flex-1 grow h-[62px] bg-[#f5ebe0] rounded-[16777200px] border-[3px] border-solid border-[#2b2622]">
                <div className="absolute top-5 left-[85px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-base text-center tracking-[0.32px] leading-6 whitespace-nowrap">
                  5 min
                </div>
              </button>

              <button className="all-[unset] box-border relative flex-1 grow h-[62px] bg-[#ef473a] rounded-[16777200px] border-[3px] border-solid border-[#2b2622] shadow-[3px_3px_0px_#2b2622b2]">
                <div className="left-[79px] text-white absolute top-5 [font-family:'Space_Grotesk',Helvetica] font-bold text-base text-center tracking-[0.32px] leading-6 whitespace-nowrap">
                  10 min
                </div>
              </button>

              <button className="all-[unset] box-border relative flex-1 grow h-[62px] bg-[#f5ebe0] rounded-[16777200px] border-[3px] border-solid border-[#2b2622]">
                <div className="left-20 text-[#2b2622] absolute top-5 [font-family:'Space_Grotesk',Helvetica] font-bold text-base text-center tracking-[0.32px] leading-6 whitespace-nowrap">
                  15 min
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-col w-[664px] h-[187px] items-start absolute top-[450px] left-[52px]">
            <div className="relative self-stretch w-full h-[28.59px]">
              <p className="absolute -top-2 left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#1e5f4d] text-[22px] tracking-[-0.22px] leading-[28.6px] whitespace-nowrap">
                Choose your topics to master.
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
                  className="absolute top-[21px] left-5 w-5 h-5"
                  alt="Icon"
                  src="https://c.animaapp.com/esb2b6Rb/img/icon.svg"
                />
              </div>
            </div>
          </div>

          <button onClick={() => navigate('/dashboard')} className="all-[unset] box-border absolute top-[637px] left-[52px] w-[664px] h-[66px] flex gap-[8.1px] bg-[#1e5f4d] shadow-[5px_5px_0px_#2b2622d9] rounded-[16777200px] border-[3px] border-solid border-[#2b2622] cursor-pointer">
            <div className="mt-[21.5px] w-[146px] h-6 ml-[242.9px] [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[32px] text-center tracking-[0.32px] leading-6 whitespace-nowrap">
              LET&#39;S GO!
            </div>

            <img
              className="mt-6 w-5 h-5"
              alt="Icon"
              src="https://c.animaapp.com/esb2b6Rb/img/icon-1.svg"
            />
          </button>

          <div onClick={() => navigate('/dashboard')} className="absolute top-[733px] left-[calc(50.00%_-_74px)] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#6b6661] text-2xl text-center tracking-[0.32px] leading-6 whitespace-nowrap cursor-pointer hover:text-[#2b2622] transition-colors">
            Skip for now
          </div>
        </div>
      </div>
    </div>
  );
};
