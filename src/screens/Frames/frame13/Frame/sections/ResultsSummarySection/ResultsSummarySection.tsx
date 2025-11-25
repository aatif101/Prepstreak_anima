import React from "react";

interface PerformanceMetric {
  icon: string;
  value: string;
  label: string;
}

interface CategoryProgress {
  category: string;
  progress: number;
  current: number;
  total: number;
  color: string;
}

export const ResultSummarySection = (): JSX.Element => {
  const performanceMetrics: PerformanceMetric[] = [
    {
      icon: "https://c.animaapp.com/kCcw4DfZ/img/container-3.svg",
      value: "60%",
      label: "Accuracy",
    },
    {
      icon: "https://c.animaapp.com/kCcw4DfZ/img/container-4.svg",
      value: "Fast",
      label: "Speed",
    },
    {
      icon: "https://c.animaapp.com/kCcw4DfZ/img/container-5.svg",
      value: "36s",
      label: "Avg Time",
    },
  ];

  const categoryProgress: CategoryProgress[] = [
    {
      category: "Arrays",
      progress: 100,
      current: 2,
      total: 2,
      color: "bg-[#00a33b]",
    },
    {
      category: "Time Complexity",
      progress: 50,
      current: 1,
      total: 2,
      color: "bg-amber-400",
    },
    {
      category: "Space Complexity",
      progress: 0,
      current: 0,
      total: 1,
      color: "bg-[#6b6661]",
    },
  ];

  return (
    <section
      className="flex flex-col w-[664px] h-[348px] items-start pt-[27px] pb-[3px] px-[27px] absolute top-[532px] left-[52px] bg-[#f5ebe0] rounded-3xl border-[3px] border-solid border-[#2b2622] shadow-[3px_3px_0px_#2b2622b2]"
      aria-labelledby="performance-breakdown-title"
    >
      <header className="relative self-stretch w-full h-[28.59px]">
        <h2
          id="performance-breakdown-title"
          className="absolute -top-2.5 left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-[22px] tracking-[-0.22px] leading-[28.6px] whitespace-nowrap"
        >
          Performance Breakdown
        </h2>
      </header>

      <div className="relative self-stretch w-full h-[139.19px]" role="list">
        {performanceMetrics.map((metric, index) => (
          <div
            key={index}
            className="absolute top-0 w-[193px] h-[139px] flex flex-col"
            style={{ left: `${index * 208}px` }}
            role="listitem"
          >
            <img
              className="ml-[56.3px] w-[80.17px] h-[81.96px] mt-[-2.0px]"
              alt={`${metric.label} icon`}
              src={metric.icon}
            />

            <div className="ml-[79.3px] w-[34.13px] mt-2 h-[25.59px] flex">
              <div className="-mt-px w-[33px] h-[26px] [font-family:'Inter',Helvetica] font-normal text-[#2b2622] text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                {metric.value}
              </div>
            </div>

            <div className="ml-[62.5px] w-[67.62px] h-[25.59px] flex">
              <div className="-mt-px w-[71px] h-[26px] [font-family:'Inter',Helvetica] font-normal text-[#6b6661] text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                {metric.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="flex flex-col h-[102px] items-start gap-3 pt-[18px] pb-0 px-0 relative self-stretch w-full border-t-2 [border-top-style:solid] border-[#2b2622]"
        role="list"
        aria-label="Category progress breakdown"
      >
        {categoryProgress.map((item, index) => (
          <div
            key={index}
            className="flex h-5 items-center justify-between relative self-stretch w-full"
            role="listitem"
          >
            <div className="relative h-5">
              <div className="absolute top-px left-0 [font-family:'Inter',Helvetica] font-normal text-[#2b2622] text-sm tracking-[0] leading-5 whitespace-nowrap">
                {item.category}
              </div>
            </div>

            <div className="flex w-36 h-5 items-center gap-2 relative">
              <div
                className="flex flex-col h-2 items-start p-px relative flex-1 grow bg-white rounded-[16777200px] overflow-hidden border border-solid border-[#2b2622]"
                role="progressbar"
                aria-valuenow={item.current}
                aria-valuemin={0}
                aria-valuemax={item.total}
                aria-label={`${item.category} progress: ${item.current} out of ${item.total}`}
              >
                <div
                  className={`relative h-1.5 ${item.color} rounded-[16777200px]`}
                  style={{ width: `${item.progress}%` }}
                />
              </div>

              <div className="relative w-10 h-5">
                <div className="absolute top-px left-0 [font-family:'Inter',Helvetica] font-normal text-[#2b2622] text-sm tracking-[0] leading-5 whitespace-nowrap">
                  {item.current}/{item.total}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
