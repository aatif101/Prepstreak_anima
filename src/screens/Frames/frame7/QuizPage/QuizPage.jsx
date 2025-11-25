import React from "react";
import { useNavigate } from "react-router-dom";

export const QuizPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-[1345px] h-[1012px]" data-model-id="11:3147">
      <div className="flex flex-col w-[1345px] h-[119px] items-start pt-4 pb-[3px] px-[224.5px] absolute top-0 left-0 bg-white border-b-[3px] [border-bottom-style:solid] border-[#2b2622]">
        <div className="flex flex-col h-[84px] items-start gap-4 relative self-stretch w-full">
          <div className="flex h-11 items-center justify-between relative self-stretch w-full">
            <div className="flex w-[241.59px] h-10 items-center gap-3 relative">
              <button onClick={() => navigate('/dashboard')} className="all-[unset] box-border w-[94.75px] h-10 items-center gap-2 px-4 py-0 relative bg-[#f5ebe0] rounded-[16777200px] border-2 border-solid flex border-[#2b2622] cursor-pointer hover:bg-[#e5dbd0] transition-colors">
                <img
                  className="relative w-4 h-4"
                  alt="Icon"
                  src="https://c.animaapp.com/wS3DyjdE/img/icon.svg"
                />

                <div className="relative flex-1 grow h-5">
                  <div className="absolute top-px left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-sm text-center tracking-[0.32px] leading-5 whitespace-nowrap">
                    Back
                  </div>
                </div>
              </button>

              <div className="flex h-8 items-center gap-[5.02px] pl-[-2.98px] pr-0 py-0 relative flex-1 grow">
                <img
                  className="relative w-[45.02px] h-[45.02px] mt-[-6.51px] mb-[-6.51px]"
                  alt="Container"
                  src="https://c.animaapp.com/wS3DyjdE/img/container.svg"
                />

                <div className="relative w-[94.84px] h-6 mr-[-7.06px]">
                  <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-normal text-[#2b2622] text-base tracking-[-0.40px] leading-6 whitespace-nowrap">
                    PREPSTREAK
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-[212.49px] h-11 items-center gap-3 relative">
              <div className="flex w-[97.64px] h-11 items-center gap-2 px-4 py-0 relative bg-[#f5ebe0] rounded-[16777200px] border-2 border-solid border-[#2b2622]">
                <img
                  className="relative w-5 h-5"
                  alt="Icon"
                  src="https://c.animaapp.com/wS3DyjdE/img/icon-1.svg"
                />

                <div className="relative flex-1 grow h-6">
                  <div className="absolute top-0 left-0 w-[43px] [font-family:'Inter',Helvetica] font-normal text-[#2b2622] text-base tracking-[0] leading-6">
                    178s
                  </div>
                </div>
              </div>

              <button className="all-[unset] box-border h-10 items-center gap-2 px-4 py-0 relative flex-1 grow bg-amber-400 rounded-[16777200px] border-2 border-solid flex border-[#2b2622]">
                <img
                  className="relative w-4 h-4"
                  alt="Icon"
                  src="https://c.animaapp.com/wS3DyjdE/img/icon-2.svg"
                />

                <div className="relative flex-1 grow h-5">
                  <div className="absolute top-px left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-sm text-center tracking-[0.32px] leading-5 whitespace-nowrap">
                    Pause
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-col h-6 items-start pl-[3px] pr-[715px] py-[3px] relative self-stretch w-full bg-white rounded-[16777200px] overflow-hidden border-[3px] border-solid border-[#2b2622]">
            <div className="flex h-[18px] items-center justify-end pl-0 pr-2 py-0 relative self-stretch w-full bg-[linear-gradient(180deg,rgba(251,191,36,1)_0%,rgba(245,158,11,1)_50%,rgba(239,71,58,1)_100%)]">
              <div className="relative w-[25.91px] h-4">
                <div className="absolute top-px left-0 w-[26px] [font-family:'Inter',Helvetica] font-normal text-white text-xs tracking-[0] leading-4">
                  20%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[167px] left-72 w-[768px] h-[797px] flex flex-col gap-8">
        <div className="flex w-[768px] h-[188.8px] relative flex-col items-start pt-11 pb-1 px-11 bg-white rounded-[32px] border-4 border-solid border-[#2b2622] shadow-[5px_5px_0px_#2b2622d9]">
          <div className="flex h-[76.8px] items-start gap-4 relative self-stretch w-full">
            <div className="flex w-10 h-10 items-center justify-center relative bg-[#ef473a] rounded-[16777200px] border-2 border-solid border-[#2b2622]">
              <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                1
              </div>
            </div>

            <div className="relative flex-1 grow h-[76.8px]">
              <p className="absolute top-0.5 left-0 w-[542px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-[32px] tracking-[-0.64px] leading-[38.4px]">
                What is the time complexity of binary search on a sorted array?
              </p>
            </div>
          </div>
        </div>

        <div className="grid w-[768px] h-[392px] relative grid-cols-1 grid-rows-4 gap-4">
          <div className="relative row-[1_/_2] col-[1_/_2] w-full h-full flex-col items-start pt-[27px] pb-[3px] px-[27px] bg-white rounded-3xl border-[3px] border-solid flex border-[#2b2622]">
            <div className="flex h-8 items-center gap-4 relative self-stretch w-full">
              <div className="flex w-8 h-8 items-center justify-center relative bg-white rounded-[16777200px] border-[3px] border-solid border-[#2b2622]">
                <div className="relative w-fit [font-family:'Space_Grotesk',Helvetica] font-bold text-neutral-950 text-base tracking-[0.32px] leading-6 whitespace-nowrap">
                  A
                </div>
              </div>

              <div className="relative w-[34.16px] h-6">
                <div className="absolute top-px left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-base tracking-[0.32px] leading-6 whitespace-nowrap">
                  O(n)
                </div>
              </div>
            </div>
          </div>

          <div className="relative row-[2_/_3] col-[1_/_2] w-full h-full flex-col items-start pt-[27px] pb-[3px] px-[27px] bg-white rounded-3xl border-[3px] border-solid flex border-[#2b2622]">
            <div className="flex h-8 items-center gap-4 relative self-stretch w-full">
              <div className="flex w-8 h-8 items-center justify-center relative bg-white rounded-[16777200px] border-[3px] border-solid border-[#2b2622]">
                <div className="relative w-fit [font-family:'Space_Grotesk',Helvetica] font-bold text-neutral-950 text-base tracking-[0.32px] leading-6 whitespace-nowrap">
                  B
                </div>
              </div>

              <div className="relative w-[63.88px] h-6">
                <div className="absolute top-px left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-base tracking-[0.32px] leading-6 whitespace-nowrap">
                  O(log n)
                </div>
              </div>
            </div>
          </div>

          <div className="relative row-[3_/_4] col-[1_/_2] w-full h-full flex-col items-start pt-[27px] pb-[3px] px-[27px] bg-white rounded-3xl border-[3px] border-solid flex border-[#2b2622]">
            <div className="flex h-8 items-center gap-4 relative self-stretch w-full">
              <div className="flex w-8 h-8 items-center justify-center relative bg-white rounded-[16777200px] border-[3px] border-solid border-[#2b2622]">
                <div className="relative w-fit [font-family:'Space_Grotesk',Helvetica] font-bold text-neutral-950 text-base tracking-[0.32px] leading-6 whitespace-nowrap">
                  C
                </div>
              </div>

              <div className="relative w-[78.73px] h-6">
                <div className="absolute top-px left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-base tracking-[0.32px] leading-6 whitespace-nowrap">
                  O(n log n)
                </div>
              </div>
            </div>
          </div>

          <div className="relative row-[4_/_5] col-[1_/_2] w-full h-full flex-col items-start pt-[27px] pb-[3px] px-[27px] bg-white rounded-3xl border-[3px] border-solid flex border-[#2b2622]">
            <div className="flex h-8 items-center gap-4 relative self-stretch w-full">
              <div className="flex w-8 h-8 items-center justify-center relative bg-white rounded-[16777200px] border-[3px] border-solid border-[#2b2622]">
                <div className="relative w-fit [font-family:'Space_Grotesk',Helvetica] font-bold text-neutral-950 text-base tracking-[0.32px] leading-6 whitespace-nowrap">
                  D
                </div>
              </div>

              <div className="relative w-[33.28px] h-6">
                <div className="absolute top-px left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-base tracking-[0.32px] leading-6 whitespace-nowrap">
                  O(1)
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="all-[unset] box-border w-[173.78px] h-[54px] relative items-center gap-2 px-6 py-0 bg-amber-400 rounded-[16777200px] border-[3px] border-solid shadow-[5px_5px_0px_#2b2622d9] flex border-[#2b2622]">
          <img
            className="relative w-5 h-5"
            alt="Icon"
            src="https://c.animaapp.com/wS3DyjdE/img/icon-3.svg"
          />

          <div className="relative w-10 h-6">
            <div className="absolute top-px left-2 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-base text-center tracking-[0.32px] leading-6 whitespace-nowrap">
              Hint
            </div>
          </div>
        </button>

        <button onClick={() => navigate('/results')} className="all-[unset] box-border ml-[541.5px] w-[226.46px] h-[66px] bg-[#1e5f4d] rounded-[16777200px] border-[3px] border-solid shadow-[5px_5px_0px_#2b2622d9] flex border-[#2b2622] cursor-pointer hover:shadow-[3px_3px_0px_#2b2622d9] transition-all">
          <div className="mt-[21.5px] w-[130px] h-6 ml-12 [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-base text-center tracking-[0.32px] leading-6 whitespace-nowrap">
            SUBMIT ANSWER
          </div>
        </button>
      </div>
    </div>
  );
};
