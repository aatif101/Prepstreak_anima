import React from "react";
import { ActionButtonsSection } from "./sections/ActionButtonsSection";
import { PerformanceBreakdownSection } from "./sections/PerformanceBreakdownSection";
import { ResultSummarySection } from "./sections/ResultsSummarySection";
import { ScoreSection } from "./sections/ScoreSection";

export const Frame = (): JSX.Element => {
  return (
    <div
      className="flex flex-col h-[1126px] items-start pt-12 pb-0 px-[288.5px] relative bg-[linear-gradient(180deg,rgba(245,235,224,1)_0%,rgba(253,246,237,1)_100%)]"
      data-model-id="11:4292"
    >
      <div className="relative self-stretch w-full h-[1030.15px] bg-white rounded-[40px] border-4 border-solid border-[#2b2622] shadow-[5px_5px_0px_#2b2622d9]">
        <div className="absolute top-[52px] left-[52px] w-[664px] h-[62px] flex">
          <div className="mt-[-19.5px] w-[420px] h-[62px] ml-[121.5px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-[56px] text-center tracking-[-1.68px] leading-[61.6px] whitespace-nowrap">
            TEST COMPLETE!
          </div>
        </div>

        <ScoreSection />
        <PerformanceBreakdownSection />
        <ResultSummarySection />
        <ActionButtonsSection />
      </div>
    </div>
  );
};
