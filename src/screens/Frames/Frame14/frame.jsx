import React from "react";
import { useNavigate } from "react-router-dom";

export const Frame = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col h-[1050px] items-start relative bg-[linear-gradient(180deg,rgba(245,235,224,1)_0%,rgba(253,246,237,1)_100%)]"
      data-model-id="11:4556"
    >
      <div className="relative self-stretch w-full h-[1050.38px] mb-[-0.38px]">
        <div className="flex flex-col w-72 h-[1050px] items-start absolute top-0 left-0 bg-white border-r-4 [border-right-style:solid] border-[#2b2622]">
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
                src="https://c.animaapp.com/vyMYoAS3/img/prepstreaklogo.svg"
              />
            </div>

            <div className="flex h-[92px] items-center gap-4 pl-4 pr-0 py-0 relative self-stretch w-full bg-[#f5ebe0] rounded-2xl border-2 border-solid border-[#2b2622]">
              <img
                className="relative w-14 h-14"
                alt="Container"
                src="https://c.animaapp.com/vyMYoAS3/img/container.svg"
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
                src="https://c.animaapp.com/vyMYoAS3/img/icon.svg"
              />

              <div className="relative w-[86.45px] h-6">
                <div className="absolute top-px left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-base tracking-[0.32px] leading-6 whitespace-nowrap">
                  Dashboard
                </div>
              </div>
            </button>

            <button onClick={() => navigate('/test/setup/step1')} className="all-[unset] box-border flex h-[60px] items-center gap-4 pl-5 pr-0 py-0 relative self-stretch w-full rounded-2xl border-2 border-solid border-transparent cursor-pointer hover:bg-[#f5ebe0] transition-colors">
              <img
                className="relative w-6 h-6"
                alt="Icon"
                src="https://c.animaapp.com/vyMYoAS3/img/icon-1.svg"
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
                src="https://c.animaapp.com/vyMYoAS3/img/icon-2.svg"
              />

              <div className="relative w-[62.7px] h-6">
                <div className="absolute top-px left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-base tracking-[0.32px] leading-6 whitespace-nowrap">
                  Quizzes
                </div>
              </div>
            </button>

            <button onClick={() => navigate('/badges')} className="all-[unset] box-border flex h-[60px] items-center gap-4 pl-5 pr-0 py-0 relative self-stretch w-full rounded-2xl border-2 border-solid border-transparent cursor-pointer hover:bg-[#f5ebe0] transition-colors">
              <img
                className="relative w-6 h-6"
                alt="Icon"
                src="https://c.animaapp.com/vyMYoAS3/img/icon-3.svg"
              />

              <div className="relative w-[59.72px] h-6">
                <div className="absolute top-px left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-base tracking-[0.32px] leading-6 whitespace-nowrap">
                  Badges
                </div>
              </div>
            </button>

            <button onClick={() => navigate('/profile')} className="all-[unset] box-border flex h-[60px] items-center gap-4 pl-5 pr-0 py-0 relative self-stretch w-full bg-[#ef473a] rounded-2xl border-2 border-solid border-[#2b2622] shadow-[3px_3px_0px_#2b2622b2] cursor-pointer">
              <img
                className="relative w-6 h-6"
                alt="Icon"
                src="https://c.animaapp.com/vyMYoAS3/img/icon-4.svg"
              />

              <div className="relative w-[52.03px] h-6">
                <div className="absolute top-px left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-base tracking-[0.32px] leading-6 whitespace-nowrap">
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
                src="https://c.animaapp.com/vyMYoAS3/img/icon-5.svg"
              />

              <div className="relative w-[56.12px] h-6">
                <div className="absolute top-px -left-px [font-family:'Space_Grotesk',Helvetica] font-bold text-[#ef473a] text-base text-center tracking-[0.32px] leading-6 whitespace-nowrap">
                  Logout
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="absolute top-10 left-[328px] w-[977px] h-[970px] flex flex-col">
          <button onClick={() => navigate('/dashboard')} className="all-[unset] box-border flex w-[205.03px] h-12 relative items-center gap-2 px-5 py-0 bg-[#f5ebe0] rounded-[16777200px] border-2 border-solid border-[#2b2622] cursor-pointer hover:bg-[#e5dbd0] transition-colors">
            <img
              className="relative w-5 h-5"
              alt="Icon"
              src="https://c.animaapp.com/vyMYoAS3/img/icon-6.svg"
            />

            <div className="relative flex-1 grow h-5">
              <div className="absolute top-px left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-sm text-center tracking-[0.32px] leading-5 whitespace-nowrap">
                Back to Dashboard
              </div>
            </div>
          </button>

          <div className="h-[61.59px] mt-10 flex flex-col gap-1.5">
            <div className="w-[292px] h-[62px] mt-[-19.5px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-[56px] tracking-[-1.68px] leading-[61.6px] whitespace-nowrap">
              Your Profile
            </div>

            <div className="w-[977px] h-[25.59px] flex">
              <p className="-mt-px w-[346px] h-[26px] [font-family:'Inter',Helvetica] font-normal text-[#6b6661] text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                Manage your account and view your progress
              </p>
            </div>
          </div>

          <div className="flex w-[977px] h-[452.59px] relative mt-[25.6px] flex-col items-start gap-10 pt-11 pb-1 px-11 bg-white rounded-[40px] border-4 border-solid border-[#2b2622] shadow-[5px_5px_0px_#2b2622d9]">
            <div className="flex h-28 items-start gap-8 relative self-stretch w-full">
              <img
                className="relative w-28 h-28"
                alt="Container"
                src="https://c.animaapp.com/vyMYoAS3/img/container-1.svg"
              />

              <div className="flex flex-col h-[97.59px] items-start pt-2 pb-0 px-0 relative flex-1 grow">
                <div className="relative self-stretch w-full h-[38.4px]">
                  <div className="absolute top-0.5 left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-[32px] tracking-[-0.64px] leading-[38.4px] whitespace-nowrap">
                    Alex Johnson
                  </div>
                </div>

                <div className="flex flex-col h-[51.19px] items-start relative self-stretch w-full">
                  <div className="relative self-stretch w-full h-[25.59px]">
                    <img
                      className="absolute top-[3px] left-0 w-5 h-5"
                      alt="Icon"
                      src="https://c.animaapp.com/vyMYoAS3/img/icon-7.svg"
                    />

                    <div className="absolute -top-px left-8 [font-family:'Inter',Helvetica] font-normal text-[#6b6661] text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                      alex.johnson@email.com
                    </div>
                  </div>

                  <div className="relative self-stretch w-full h-[25.59px]">
                    <img
                      className="absolute top-[3px] left-0 w-5 h-5"
                      alt="Icon"
                      src="https://c.animaapp.com/vyMYoAS3/img/icon-8.svg"
                    />

                    <div className="absolute -top-px left-8 w-[207px] [font-family:'Inter',Helvetica] font-normal text-[#6b6661] text-base tracking-[0] leading-[25.6px]">
                      Member since January 2024
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-[212.59px] items-start pt-[34px] pb-0 px-0 relative self-stretch w-full border-t-2 [border-top-style:solid] border-[#2b2622]">
              <div className="relative self-stretch w-full h-[28.59px]">
                <div className="absolute -top-2 left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#1e5f4d] text-[22px] tracking-[-0.22px] leading-[28.6px] whitespace-nowrap">
                  Stats Overview
                </div>
              </div>

              <div className="grid grid-cols-2 grid-rows-1 h-[150px] gap-6 absolute top-[63px] left-0 w-[889px]">
                <div className="relative row-[1_/_2] col-[1_/_2] w-full h-full flex items-center gap-6 pl-8 pr-0 py-0 rounded-3xl border-[3px] border-solid border-[#2b2622] shadow-[3px_3px_0px_#2b2622b2] bg-[linear-gradient(180deg,rgba(254,226,226,1)_0%,rgba(254,202,202,1)_100%)]">
                  <img
                    className="relative w-20 h-20"
                    alt="Container"
                    src="https://c.animaapp.com/vyMYoAS3/img/container-2.svg"
                  />

                  <div className="flex flex-col w-[333px] h-[115px] items-start relative mr-[-39.50px]">
                    <div className="relative self-stretch w-full h-[25.59px]">
                      <div className="absolute top-[29px] left-0 [font-family:'Inter',Helvetica] font-normal text-[#6b6661] text-base tracking-[0.80px] leading-[25.6px] whitespace-nowrap">
                        CURRENT STREAK
                      </div>
                    </div>

                    <div className="relative w-[134px] h-20">
                      <div className="absolute top-[30px] left-0 w-[149px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-[32px] tracking-[-0.64px] leading-[38.4px]">
                        365 Days
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative row-[1_/_2] col-[2_/_3] w-full h-full flex items-center gap-6 pl-8 pr-0 py-0 rounded-3xl border-[3px] border-solid border-[#2b2622] shadow-[3px_3px_0px_#2b2622b2] bg-[linear-gradient(180deg,rgba(254,243,199,1)_0%,rgba(253,230,138,1)_100%)]">
                  <img
                    className="relative w-20 h-20"
                    alt="Container"
                    src="https://c.animaapp.com/vyMYoAS3/img/container-3.svg"
                  />

                  <div className="flex flex-col w-[94.04px] h-[63.99px] items-start relative">
                    <div className="relative self-stretch w-full h-[25.59px]">
                      <div className="absolute -top-px left-0 [font-family:'Inter',Helvetica] font-normal text-[#6b6661] text-base tracking-[0.80px] leading-[25.6px] whitespace-nowrap">
                        TOTAL XP
                      </div>
                    </div>

                    <div className="relative self-stretch w-full h-[38.4px]">
                      <div className="absolute top-0.5 left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-[32px] tracking-[-0.64px] leading-[38.4px] whitespace-nowrap">
                        12,450
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-[977px] h-[310.59px] relative mt-8 flex-col items-start pt-11 pb-1 px-11 bg-white rounded-[40px] border-4 border-solid border-[#2b2622] shadow-[5px_5px_0px_#2b2622d9]">
            <div className="relative self-stretch w-full h-[28.59px]">
              <div className="absolute top-[-7px] left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#1e5f4d] text-[22px] tracking-[-0.22px] leading-[28.6px] whitespace-nowrap">
                Account Settings
              </div>
            </div>

            <div className="flex flex-col h-[194px] items-start gap-4 relative self-stretch w-full">
              <button className="all-[unset] box-border relative self-stretch w-full h-[54px] rounded-[16777200px] border-[3px] border-solid border-[#2b2622]">
                <div className="absolute top-[18px] left-[401px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-sm text-center tracking-[0.28px] leading-5 whitespace-nowrap">
                  EDIT PROFILE
                </div>
              </button>

              <button className="all-[unset] box-border relative self-stretch w-full h-[54px] rounded-[16777200px] border-[3px] border-solid border-[#2b2622]">
                <div className="absolute top-[18px] left-[377px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-sm text-center tracking-[0.28px] leading-5 whitespace-nowrap">
                  CHANGE PASSWORD
                </div>
              </button>

              <button className="all-[unset] box-border relative self-stretch w-full h-[54px] rounded-[16777200px] border-[3px] border-solid border-[#2b2622]">
                <div className="absolute top-[18px] left-[349px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-sm text-center tracking-[0.28px] leading-5 whitespace-nowrap">
                  NOTIFICATION PREFERENCES
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
