import React, { useState } from "react";

interface NavItem {
  id: string;
  label: string;
  icon: string;
  isActive?: boolean;
}

interface QuestionType {
  id: string;
  label: string;
  isSelected: boolean;
}

export const Frame = (): JSX.Element => {
  const [selectedQuestionTypes, setSelectedQuestionTypes] = useState<string[]>([
    "mcq",
  ]);

  const navItems: NavItem[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "https://c.animaapp.com/mkspS8aD/img/icon.svg",
      isActive: false,
    },
    {
      id: "test-mode",
      label: "Test Mode",
      icon: "https://c.animaapp.com/mkspS8aD/img/icon-1.svg",
      isActive: true,
    },
    {
      id: "quizzes",
      label: "Quizzes",
      icon: "https://c.animaapp.com/mkspS8aD/img/icon-2.svg",
      isActive: false,
    },
    {
      id: "badges",
      label: "Badges",
      icon: "https://c.animaapp.com/mkspS8aD/img/icon-3.svg",
      isActive: false,
    },
    {
      id: "profile",
      label: "Profile",
      icon: "https://c.animaapp.com/mkspS8aD/img/icon-4.svg",
      isActive: false,
    },
  ];

  const questionTypes: QuestionType[] = [
    { id: "mcq", label: "MCQ", isSelected: true },
    { id: "fill-in-blanks", label: "Fill in the blanks", isSelected: false },
    { id: "one-word", label: "One-word answer", isSelected: false },
  ];

  const toggleQuestionType = (id: string) => {
    setSelectedQuestionTypes((prev) => {
      if (prev.includes(id)) {
        return prev.filter((typeId) => typeId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div
      className="bg-[linear-gradient(180deg,rgba(245,235,224,1)_0%,rgba(253,246,237,1)_100%)] w-full min-w-[1345px] min-h-[902px] relative"
      data-model-id="11:3701"
    >
      <div className="top-0 w-[1345px] h-[902px] flex gap-8 absolute left-0">
        <aside
          className="flex w-72 h-[902px] relative flex-col items-start bg-white border-r-4 [border-right-style:solid] border-[#2b2622]"
          role="navigation"
          aria-label="Main navigation"
        >
          <header className="flex flex-col w-[284px] h-[223px] items-start gap-6 pt-8 pb-[3px] px-8 relative border-b-[3px] [border-bottom-style:solid] border-[#2b2622]">
            <div className="relative self-stretch w-full h-10">
              <div className="absolute top-1.5 left-[52px] w-28 h-[29px] flex">
                <h1 className="mt-[1.5px] w-[114px] h-[29px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-[22px] tracking-[-0.44px] leading-[28.6px] whitespace-nowrap">
                  PrepStreak
                </h1>
              </div>

              <img
                className="absolute top-0 left-0 w-10 h-10"
                alt="PrepStreak logo"
                src="https://c.animaapp.com/mkspS8aD/img/prepstreaklogo.svg"
              />
            </div>

            <div className="flex h-[92px] items-center gap-4 pl-4 pr-0 py-0 relative self-stretch w-full bg-[#f5ebe0] rounded-2xl border-2 border-solid border-[#2b2622]">
              <img
                className="relative w-14 h-14"
                alt="User avatar"
                src="https://c.animaapp.com/mkspS8aD/img/container.svg"
              />

              <div className="flex flex-col w-[96.77px] h-[51.19px] items-start relative">
                <div className="relative self-stretch w-full h-[25.59px] overflow-hidden">
                  <p className="absolute -top-px left-0 [font-family:'Inter',Helvetica] font-normal text-[#2b2622] text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                    Alex Johnson
                  </p>
                </div>

                <div className="relative self-stretch w-full h-[25.59px]">
                  <p className="absolute -top-px left-0 [font-family:'Inter',Helvetica] font-normal text-[#6b6661] text-base tracking-[0.40px] leading-[25.6px] whitespace-nowrap">
                    LEVEL 12
                  </p>
                </div>
              </div>
            </div>
          </header>

          <nav className="flex flex-col w-[284px] items-start gap-2 pt-5 pb-0 px-5 relative flex-1 grow">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`all-[unset] box-border flex h-[60px] items-center gap-4 pl-5 pr-0 py-0 relative self-stretch w-full rounded-2xl border-2 border-solid ${
                  item.isActive
                    ? "bg-[#ef473a] border-[#2b2622] shadow-[3px_3px_0px_#2b2622b2]"
                    : "border-transparent"
                }`}
                aria-current={item.isActive ? "page" : undefined}
              >
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src={item.icon}
                  aria-hidden="true"
                />

                <span
                  className={`[font-family:'Space_Grotesk',Helvetica] font-bold text-base tracking-[0.32px] leading-6 whitespace-nowrap ${
                    item.isActive ? "text-white" : "text-[#2b2622]"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          <div className="flex flex-col w-[284px] h-[103px] items-start pt-[23px] pb-0 px-5 relative border-t-[3px] [border-top-style:solid] border-[#2b2622]">
            <button className="all-[unset] box-border flex h-[60px] items-center gap-4 pl-5 pr-0 py-0 relative self-stretch w-full rounded-2xl border-2 border-solid border-transparent">
              <img
                className="relative w-6 h-6"
                alt=""
                src="https://c.animaapp.com/mkspS8aD/img/icon-5.svg"
                aria-hidden="true"
              />

              <span className="[font-family:'Space_Grotesk',Helvetica] font-bold text-[#ef473a] text-base text-center tracking-[0.32px] leading-6 whitespace-nowrap">
                Logout
              </span>
            </button>
          </div>
        </aside>

        <main className="flex mt-8 w-[993px] h-[87.19px] relative flex-col items-start">
          <div className="relative self-stretch w-full h-[61.59px]">
            <h2 className="top-1 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-[56px] tracking-[-1.68px] leading-[61.6px] whitespace-nowrap absolute left-0">
              Test Mode
            </h2>
          </div>

          <div className="relative self-stretch w-full h-[25.59px]">
            <p className="absolute -top-px left-0 [font-family:'Inter',Helvetica] font-normal text-[#6b6661] text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
              Configure your test to get started...
            </p>
          </div>
        </main>
      </div>

      <div
        className="absolute top-0 left-0 w-[1345px] h-[902px] flex bg-[#00000080]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="mt-40 w-[768px] h-[582.18px] ml-[362px] relative bg-white rounded-[40px] overflow-hidden border-4 border-solid border-[#2b2622] shadow-[6px_6px_0px_#2b2622e6]">
          <div className="absolute top-[52px] left-[52px] w-[664px] h-[38px] flex">
            <h3
              id="modal-title"
              className="mt-[2.5px] w-[292px] h-[39px] ml-[186.2px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#ef473a] text-[32px] text-center tracking-[-0.64px] leading-[38.4px] whitespace-nowrap"
            >
              PREPARE YOUR QUIZ
            </h3>
          </div>

          <div className="absolute top-[90px] left-[52px] w-[664px] h-[26px] flex">
            <p className="mt-[-1.4px] w-[110px] h-[27px] ml-[277px] [font-family:'Inter',Helvetica] font-normal text-[#6b6661] text-base text-center tracking-[0] leading-[25.6px] whitespace-nowrap">
              Step 2 of 3
            </p>
          </div>

          <div className="flex flex-col w-[664px] h-[300px] items-start absolute top-[116px] left-[52px]">
            <div className="relative self-stretch w-full h-[28.59px]">
              <h4 className="absolute -top-0.5 left-[207px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#1e5f4d] text-[22px] text-center tracking-[-0.22px] leading-[28.6px] whitespace-nowrap">
                Pick your challenge type
              </h4>
            </div>

            <div className="relative self-stretch w-full h-[25.59px]">
              <p className="absolute top-[-3px] left-[181px] w-[307px] [font-family:'Inter',Helvetica] font-normal text-[#6b6661] text-base text-center tracking-[0] leading-[25.6px]">
                Choose one or multiple question formats
              </p>
            </div>

            <fieldset className="flex flex-col h-[246px] items-start gap-4 relative self-stretch w-full">
              <legend className="sr-only">Question types</legend>
              {questionTypes.map((type) => {
                const isSelected = selectedQuestionTypes.includes(type.id);
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => toggleQuestionType(type.id)}
                    className={`all-[unset] box-border flex items-center justify-between px-6 py-0 relative self-stretch w-full rounded-[16777200px] border-[3px] border-solid border-[#2b2622] ${
                      isSelected
                        ? "h-[74px] bg-[#a8dadc] shadow-[3px_3px_0px_#2b2622b2]"
                        : "h-[70px] bg-white"
                    }`}
                    role="checkbox"
                    aria-checked={isSelected}
                  >
                    <span className="[font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-base text-center tracking-[0.32px] leading-6 whitespace-nowrap">
                      {type.label}
                    </span>

                    {isSelected && (
                      <img
                        className="relative w-7 h-7"
                        alt="Selected"
                        src="https://c.animaapp.com/mkspS8aD/img/container-1.svg"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </fieldset>
          </div>

          <div className="flex w-[664px] h-[66px] items-start gap-4 absolute top-[464px] left-[52px]">
            <button
              type="button"
              className="all-[unset] box-border relative w-[161.5px] h-[66px] rounded-[16777200px] border-[3px] border-solid border-[#2b2622]"
            >
              <img
                className="left-[43px] absolute top-[23px] w-5 h-5"
                alt=""
                src="https://c.animaapp.com/mkspS8aD/img/icon-6.svg"
                aria-hidden="true"
              />

              <span className="absolute top-[22px] left-[74px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-base text-center tracking-[0.32px] leading-6 whitespace-nowrap">
                BACK
              </span>
            </button>

            <button
              type="button"
              className="all-[unset] box-border relative flex-1 grow h-[66px] bg-[#1e5f4d] rounded-[16777200px] border-[3px] border-solid border-[#2b2622] shadow-[5px_5px_0px_#2b2622d9]"
            >
              <span className="absolute top-[22px] left-[209px] [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-base text-center tracking-[0.32px] leading-6 whitespace-nowrap">
                NEXT
              </span>

              <img
                className="left-[259px] absolute top-[23px] w-5 h-5"
                alt=""
                src="https://c.animaapp.com/mkspS8aD/img/icon-7.svg"
                aria-hidden="true"
              />
            </button>
          </div>

          <button
            type="button"
            className="absolute top-9 left-[692px] w-10 h-10"
            aria-label="Close modal"
          >
            <img
              className="w-full h-full"
              alt=""
              src="https://c.animaapp.com/mkspS8aD/img/button.svg"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
