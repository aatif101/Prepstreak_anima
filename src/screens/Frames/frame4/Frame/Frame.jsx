import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const Frame = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isTestMode = location.pathname.includes('/test/');
  const isQuizMode = location.pathname.includes('/quiz/');

  return (
    <div
      className="bg-[linear-gradient(180deg,rgba(245,235,224,1)_0%,rgba(253,246,237,1)_100%)] w-full min-w-[1345px] min-h-[902px] relative"
      data-model-id="11:2528"
    >
      <div className="top-0 w-[1345px] h-[902px] flex gap-8 absolute left-0">
        <div className="flex w-72 h-[902px] relative flex-col items-start bg-white border-r-4 [border-right-style:solid] border-[#2b2622]">
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
                src="https://c.animaapp.com/CvnfbihK/img/prepstreaklogo.svg"
              />
            </div>

            <div className="flex h-[92px] items-center gap-4 pl-4 pr-0 py-0 relative self-stretch w-full bg-[#f5ebe0] rounded-2xl border-2 border-solid border-[#2b2622]">
              <img
                className="relative w-14 h-14"
                alt="Container"
                src="https://c.animaapp.com/CvnfbihK/img/container.svg"
              />

              <div className="flex flex-col w-[96.77px] h-[51.19px] items-start relative">
                <div className="relative self-stretch w-full h-[25.59px] overflow-hidden">
                  <div className="absolute -top-px left-0 [font-family:'Inter',Helvetica] font-normal text-[#2b2622] text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                    Alex Johnson
                  </div>
                </div>

                <div className="relative self-stretch w-full h-[25.59px]">
                  <div className="absolute -top-px left-0 [font-family:'Inter',Helvetica] font-normal text-[#6b6661] text-base tracking-[0.40px] leading-[25.6px] whitespace-nowrap">
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
                src="https://c.animaapp.com/CvnfbihK/img/icon.svg"
              />

              <div className="relative w-[86.45px] h-6">
                <div className="absolute top-px left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-base tracking-[0.32px] leading-6 whitespace-nowrap">
                  Dashboard
                </div>
              </div>
            </button>

            <button onClick={() => navigate('/test/setup/step1')} className={`all-[unset] box-border flex h-[60px] items-center gap-4 pl-5 pr-0 py-0 relative self-stretch w-full rounded-2xl border-2 border-solid ${isTestMode ? 'bg-[#ef473a] border-[#2b2622] shadow-[3px_3px_0px_#2b2622b2]' : 'border-transparent'} cursor-pointer ${!isTestMode && 'hover:bg-[#f5ebe0]'} transition-colors`}>
              <img
                className="relative w-6 h-6"
                alt="Icon"
                src="https://c.animaapp.com/CvnfbihK/img/icon-1.svg"
              />

              <div className="w-[80.82px] relative h-6">
                <div className={`absolute top-px left-0 [font-family:'Space_Grotesk',Helvetica] font-bold ${isTestMode ? 'text-white' : 'text-[#2b2622]'} text-base tracking-[0.32px] leading-6 whitespace-nowrap`}>
                  Test Mode
                </div>
              </div>
            </button>

            <button onClick={() => navigate('/quiz/setup/step1')} className={`all-[unset] box-border flex h-[60px] items-center gap-4 pl-5 pr-0 py-0 relative self-stretch w-full rounded-2xl border-2 border-solid ${isQuizMode ? 'bg-[#ef473a] border-[#2b2622] shadow-[3px_3px_0px_#2b2622b2]' : 'border-transparent'} cursor-pointer ${!isQuizMode && 'hover:bg-[#f5ebe0]'} transition-colors`}>
              <img
                className="relative w-6 h-6"
                alt="Icon"
                src="https://c.animaapp.com/CvnfbihK/img/icon-2.svg"
              />

              <div className="w-[62.7px] relative h-6">
                <div className={`absolute top-px left-0 [font-family:'Space_Grotesk',Helvetica] font-bold ${isQuizMode ? 'text-white' : 'text-[#2b2622]'} text-base tracking-[0.32px] leading-6 whitespace-nowrap`}>
                  Quizzes
                </div>
              </div>
            </button>

            <button onClick={() => navigate('/badges')} className="all-[unset] box-border flex h-[60px] items-center gap-4 pl-5 pr-0 py-0 relative self-stretch w-full rounded-2xl border-2 border-solid border-transparent cursor-pointer hover:bg-[#f5ebe0] transition-colors">
              <img
                className="relative w-6 h-6"
                alt="Icon"
                src="https://c.animaapp.com/CvnfbihK/img/icon-3.svg"
              />

              <div className="w-[59.72px] relative h-6">
                <div className="absolute top-px left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-base tracking-[0.32px] leading-6 whitespace-nowrap">
                  Badges
                </div>
              </div>
            </button>

            <button onClick={() => navigate('/profile')} className="all-[unset] box-border flex h-[60px] items-center gap-4 pl-5 pr-0 py-0 relative self-stretch w-full rounded-2xl border-2 border-solid border-transparent cursor-pointer hover:bg-[#f5ebe0] transition-colors">
              <img
                className="relative w-6 h-6"
                alt="Icon"
                src="https://c.animaapp.com/CvnfbihK/img/icon-4.svg"
              />

              <div className="w-[52.03px] relative h-6">
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
                src="https://c.animaapp.com/CvnfbihK/img/icon-5.svg"
              />

              <div className="w-[56.12px] relative h-6">
                <div className="absolute top-px -left-px [font-family:'Space_Grotesk',Helvetica] font-bold text-[#ef473a] text-base text-center tracking-[0.32px] leading-6 whitespace-nowrap">
                  Logout
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="flex mt-8 w-[993px] h-[87.19px] relative flex-col items-start">
          <div className="relative self-stretch w-full h-[61.59px]">
            <div className="top-1 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-[56px] tracking-[-1.68px] leading-[61.6px] whitespace-nowrap absolute left-0">
              Quizzes
            </div>
          </div>

          <div className="relative self-stretch w-full h-[25.59px]">
            <p className="absolute -top-px left-0 [font-family:'Inter',Helvetica] font-normal text-[#6b6661] text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
              Configure your quiz to get started...
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-[1345px] h-[902px] flex bg-[#00000080]">
        <div className="mt-[246px] w-[768px] h-[410.18px] ml-[334px] relative bg-white rounded-[40px] overflow-hidden border-4 border-solid border-[#2b2622] shadow-[6px_6px_0px_#2b2622e6]">
          <div className="absolute top-[52px] left-[52px] w-[664px] h-[38px] flex">
            <div className="mt-[2.5px] w-[292px] h-[39px] ml-[186.2px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#ef473a] text-[32px] text-center tracking-[-0.64px] leading-[38.4px] whitespace-nowrap">
              PREPARE YOUR QUIZ
            </div>
          </div>

          <div className="absolute top-[90px] left-[52px] w-[664px] h-[26px] flex">
            <div className="mt-[-0.3px] w-24 h-[26px] ml-[284.5px] [font-family:'Inter',Helvetica] font-normal text-[#6b6661] text-base text-center tracking-[0] leading-[25.6px]">
              Step 1 of 3
            </div>
          </div>

          <div className="flex flex-col w-[664px] h-32 items-start absolute top-[116px] left-[52px]">
            <div className="relative self-stretch w-full h-[28.59px]">
              <p className="absolute -top-px left-[162px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#1e5f4d] text-[22px] text-center tracking-[-0.22px] leading-[28.6px] whitespace-nowrap">
                How long do you want to study?
              </p>
            </div>

            <div className="relative self-stretch w-full h-[25.59px]">
              <div className="absolute -top-px left-[237px] [font-family:'Inter',Helvetica] font-normal text-[#6b6661] text-base text-center tracking-[0] leading-[25.6px] whitespace-nowrap">
                Select your quiz duration
              </div>
            </div>

            <div className="flex h-[74px] items-start gap-4 pl-0 pr-[0.01px] py-0 relative self-stretch w-full">
              <button className="all-[unset] box-border relative flex-1 grow h-[74px] bg-[#ef473a] rounded-[16777200px] border-[3px] border-solid border-[#2b2622] shadow-[3px_3px_0px_#2b2622b2]">
                <div className="absolute top-6 left-[81px] [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-lg text-center tracking-[0.36px] leading-7 whitespace-nowrap">
                  5 min
                </div>
              </button>

              <button className="all-[unset] box-border relative flex-1 grow h-[74px] bg-[#f5ebe0] rounded-[16777200px] border-[3px] border-solid border-[#2b2622]">
                <div className="left-[77px] absolute top-6 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-lg text-center tracking-[0.36px] leading-7 whitespace-nowrap">
                  10 min
                </div>
              </button>

              <button className="all-[unset] box-border relative flex-1 grow h-[74px] bg-[#f5ebe0] rounded-[16777200px] border-[3px] border-solid border-[#2b2622]">
                <div className="left-[78px] absolute top-6 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-lg text-center tracking-[0.36px] leading-7 whitespace-nowrap">
                  15 min
                </div>
              </button>
            </div>
          </div>

          <button onClick={() => navigate(isTestMode ? '/test/setup/step2' : '/quiz/setup/step2')} className="all-[unset] box-border absolute top-[292px] left-[52px] w-[664px] h-[66px] flex gap-[9px] bg-[#1e5f4d] rounded-[16777200px] border-[3px] border-solid border-[#2b2622] shadow-[5px_5px_0px_#2b2622d9] cursor-pointer hover:shadow-[3px_3px_0px_#2b2622d9] transition-all">
            <div className="mt-[21.5px] w-[41px] h-6 ml-[298.0px] [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-base text-center tracking-[0.32px] leading-6 whitespace-nowrap">
              NEXT
            </div>

            <img
              className="mt-[23px] w-5 h-5"
              alt="Icon"
              src="https://c.animaapp.com/CvnfbihK/img/icon-6.svg"
            />
          </button>

          <button onClick={() => navigate('/dashboard')} className="all-[unset] box-border absolute top-[19px] left-[27px] w-[162px] h-[66px] flex gap-[11px] rounded-[16777200px] border-[3px] border-solid border-[#2b2622] cursor-pointer hover:bg-[#f5ebe0] transition-colors">
            <img
              className="ml-[43px] mt-[23px] w-5 h-5"
              alt="Icon"
              src="https://c.animaapp.com/CvnfbihK/img/icon-7.svg"
            />

            <div className="mt-[21.5px] w-[42px] h-6 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-base text-center tracking-[0.32px] leading-6 whitespace-nowrap">
              BACK
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
