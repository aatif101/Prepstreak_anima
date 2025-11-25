import React from "react";

interface PerformanceCardData {
  icon: string;
  count: number;
  label: string;
  bgColor: string;
}

export const PerformanceBreakdownSection = (): JSX.Element => {
  const performanceData: PerformanceCardData[] = [
    {
      icon: "https://c.animaapp.com/kCcw4DfZ/img/container.svg",
      count: 3,
      label: "CORRECT",
      bgColor: "bg-[#00a33b]",
    },
    {
      icon: "https://c.animaapp.com/kCcw4DfZ/img/container-1.svg",
      count: 1,
      label: "WRONG",
      bgColor: "bg-[#ef473a]",
    },
    {
      icon: "https://c.animaapp.com/kCcw4DfZ/img/container-2.svg",
      count: 1,
      label: "SKIPPED",
      bgColor: "bg-[#6b6661]",
    },
  ];

  return (
    <section
      className="absolute top-[330px] left-[52px] w-[664px] h-[170px] flex gap-4"
      role="region"
      aria-label="Performance Breakdown"
    >
      {performanceData.map((item, index) => (
        <article
          key={index}
          className={`flex w-[210.66px] h-[169.99px] relative flex-col items-start gap-3 pt-[27px] pb-[3px] px-[27px] ${item.bgColor} rounded-3xl border-[3px] border-solid border-[#2b2622] shadow-[3px_3px_0px_#2b2622b2]`}
          aria-label={`${item.label}: ${item.count}`}
        >
          <img
            className="relative self-stretch w-full h-10"
            alt={`${item.label} icon`}
            src={item.icon}
            aria-hidden="true"
          />

          <div className="relative self-stretch w-full h-[38.4px]">
            <div className="absolute top-0.5 left-[69px] [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[32px] text-center tracking-[-0.64px] leading-[38.4px] whitespace-nowrap">
              {item.count}
            </div>
          </div>

          <div className="relative self-stretch w-full h-[25.59px]">
            <div className="absolute -top-px left-[39px] [font-family:'Inter',Helvetica] font-normal text-[#fffefee6] text-base text-center tracking-[0.40px] leading-[25.6px] whitespace-nowrap">
              {item.label}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};
