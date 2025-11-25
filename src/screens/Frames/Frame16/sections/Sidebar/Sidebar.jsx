import React from "react";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-72 h-[1579px] items-start absolute top-0 left-0 bg-white border-r-4 [border-right-style:solid] border-[#2b2622]">
      <div className="flex flex-col w-[284px] h-[223px] items-start gap-6 pt-8 pb-[3px] px-8 relative border-b-[3px] [border-bottom-style:solid] border-[#2b2622]">
        <div className="relative self-stretch w-full h-10">
          <div className="absolute top-1.5 left-[52px] w-28 h-[29px] flex">
            <div className="mt-[1.5px] w-[114px] h-[29px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-[22px] tracking-[-0.44px] leading-[28.6px] whitespace-nowrap">
              PrepStreak
            </div>
          </div>

          <img
            className="absolute top-0 left-0 w-10 h-10"
            alt="Prep streak logo"
            src="https://c.animaapp.com/b2WEFBJh/img/prepstreaklogo.svg"
          />
        </div>

        <div className="flex h-[92px] items-center gap-4 pl-4 pr-0 py-0 relative self-stretch w-full bg-[#f5ebe0] rounded-2xl border-2 border-solid border-[#2b2622]">
          <img
            className="relative w-14 h-14"
            alt="Container"
            src="https://c.animaapp.com/b2WEFBJh/img/container.svg"
          />

          <div className="flex flex-col w-[96.77px] h-[51.19px] items-start relative">
            <div className="relative self-stretch w-full h-[25.59px] overflow-hidden">
              <div className="absolute -top-px left-0 [font-family:'Inter',Helvetica] font-normal text-[#2b2622] text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                Alex Johnson
              </div>
            </div>

            <div className="relative self-stretch w-full h-[25.59px]">
              <div className="absolute -top-px left-0 font-normal text-[#6b6661] text-base tracking-[0.40px] leading-[25.6px] [font-family:'Inter',Helvetica] whitespace-nowrap">
                LEVEL 12
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[284px] items-start gap-2 pt-5 pb-0 px-5 relative flex-1 grow">
        <button onClick={() => navigate('/dashboard')} className="all-[unset] box-border flex h-[60px] items-center gap-4 pl-5 pr-0 py-0 relative self-stretch w-full rounded-2xl border-2 border-solid border-transparent cursor-pointer hover:bg-[#f5ebe0] transition-colors">
          <img
            className="relative w-6 h-6"
            alt="Icon"
            src="https://c.animaapp.com/b2WEFBJh/img/icon.svg"
          />

          <div className="relative w-[86.45px] h-6">
            <div className="absolute top-px left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-base tracking-[0.32px] leading-6 whitespace-nowrap">
              Dashboard
            </div>
          </div>
        </button>

        <button onClick={() => navigate('/test/setup/step1')} className="all-[unset] box-border border-transparent flex h-[60px] items-center gap-4 pl-5 pr-0 py-0 relative self-stretch w-full rounded-2xl border-2 border-solid cursor-pointer hover:bg-[#f5ebe0] transition-colors">
          <img
            className="relative w-6 h-6"
            alt="Icon"
            src="https://c.animaapp.com/b2WEFBJh/img/icon-1.svg"
          />

          <div className="relative w-[80.82px] h-6">
            <div className="absolute top-px left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-base tracking-[0.32px] leading-6 whitespace-nowrap">
              Test Mode
            </div>
          </div>
        </button>

        <button onClick={() => navigate('/quiz/setup/step1')} className="all-[unset] box-border flex h-[60px] items-center gap-4 pl-5 pr-0 py-0 relative self-stretch w-full rounded-2xl border-2 border-solid border-transparent cursor-pointer hover:bg-[#f5ebe0] transition-colors">
          <img
            className="relative w-6 h-6"
            alt="Icon"
            src="https://c.animaapp.com/b2WEFBJh/img/icon-2.svg"
          />

          <div className="relative w-[62.7px] h-6">
            <div className="absolute top-px left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-base tracking-[0.32px] leading-6 whitespace-nowrap">
              Quizzes
            </div>
          </div>
        </button>

        <button onClick={() => navigate('/badges')} className="all-[unset] box-border bg-[#ef473a] border-[#2b2622] shadow-[3px_3px_0px_#2b2622b2] flex h-[60px] items-center gap-4 pl-5 pr-0 py-0 relative self-stretch w-full rounded-2xl border-2 border-solid cursor-pointer">
          <img
            className="relative w-6 h-6"
            alt="Icon"
            src="https://c.animaapp.com/b2WEFBJh/img/icon-3.svg"
          />

          <div className="relative w-[59.72px] h-6">
            <div className="absolute top-px left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-base tracking-[0.32px] leading-6 whitespace-nowrap">
              Badges
            </div>
          </div>
        </button>

        <button onClick={() => navigate('/profile')} className="all-[unset] box-border border-transparent flex h-[60px] items-center gap-4 pl-5 pr-0 py-0 relative self-stretch w-full rounded-2xl border-2 border-solid cursor-pointer hover:bg-[#f5ebe0] transition-colors">
          <img
            className="relative w-6 h-6"
            alt="Icon"
            src="https://c.animaapp.com/b2WEFBJh/img/icon-4.svg"
          />

          <div className="relative w-[52.03px] h-6">
            <div className="absolute top-px left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-base tracking-[0.32px] leading-6 whitespace-nowrap">
              Profile
            </div>
          </div>
        </button>
      </div>

      <div className="flex flex-col w-[284px] h-[103px] items-start pt-[23px] pb-0 px-5 relative border-t-[3px] [border-top-style:solid] border-[#2b2622]">
        <button onClick={() => navigate('/')} className="all-[unset] box-border flex h-[60px] items-center gap-4 pl-5 pr-0 py-0 relative self-stretch w-full rounded-2xl border-2 border-solid border-transparent cursor-pointer hover:bg-[#f5ebe0] transition-colors">
          <img
            className="relative w-6 h-6"
            alt="Icon"
            src="https://c.animaapp.com/b2WEFBJh/img/icon-5.svg"
          />

          <div className="relative w-[56.12px] h-6">
            <div className="absolute top-px -left-px [font-family:'Space_Grotesk',Helvetica] font-bold text-[#ef473a] text-base text-center tracking-[0.32px] leading-6 whitespace-nowrap">
              Logout
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
