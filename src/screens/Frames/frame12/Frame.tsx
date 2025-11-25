import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Answer {
  id: number;
  text: string;
}

export const Frame = (): JSX.Element => {
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeRemaining] = useState<number>(177);
  const [progress] = useState<number>(20);

  const questionText =
    "What is the time complexity of binary search on a sorted array?";

  const answers: Answer[] = [
    { id: 1, text: "O(n)" },
    { id: 2, text: "O(log n)" },
    { id: 3, text: "O(n log n)" },
    { id: 4, text: "O(1)" },
  ];

  const handleAnswerClick = (answerId: number) => {
    setSelectedAnswer(answerId);
  };

  const handleBackClick = () => {
    navigate('/dashboard');
  };

  const handlePauseClick = () => {
    console.log("Pause button clicked");
  };

  const handleHintClick = () => {
    console.log("Hint button clicked");
  };

  const handleSkipClick = () => {
    console.log("Skip button clicked");
  };

  const handleNextClick = () => {
    if (selectedAnswer !== null) {
      navigate('/results');
    }
  };

  return (
    <div
      className="bg-[linear-gradient(180deg,rgba(245,235,224,1)_0%,rgba(253,246,237,1)_100%)] w-full min-w-[1345px] min-h-[902px] flex flex-col gap-[106.5px]"
      data-model-id="11:4098"
    >
      <header className="flex w-[1345px] h-[119px] relative flex-col items-start pt-4 pb-[3px] px-[224.5px] bg-white border-b-[3px] [border-bottom-style:solid] border-[#2b2622]">
        <div className="flex flex-col h-[84px] items-start gap-4 relative self-stretch w-full">
          <nav className="flex h-11 items-center justify-between relative self-stretch w-full">
            <div className="flex w-[241.59px] h-10 items-center gap-3 relative">
              <button
                className="all-[unset] box-border flex w-[94.75px] h-10 items-center gap-2 px-4 py-0 bg-[#f5ebe0] border-2 border-solid relative rounded-[16777200px] border-[#2b2622] cursor-pointer"
                onClick={handleBackClick}
                aria-label="Go back"
              >
                <img
                  className="relative w-4 h-4"
                  alt=""
                  src="https://c.animaapp.com/HBCDjswS/img/icon.svg"
                />
                <span className="relative flex-1 grow h-5">
                  <span className="absolute top-px left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-sm text-center tracking-[0.32px] leading-5 whitespace-nowrap">
                    Back
                  </span>
                </span>
              </button>

              <div className="flex h-8 items-center gap-[5.02px] pl-[-2.98px] pr-0 py-0 relative flex-1 grow">
                <img
                  className="relative w-[45.02px] h-[45.02px] mt-[-6.51px] mb-[-6.51px]"
                  alt="PrepStreak Logo"
                  src="https://c.animaapp.com/HBCDjswS/img/container.svg"
                />
                <div className="relative w-[94.84px] h-6 mr-[-7.06px]">
                  <span className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-normal text-[#2b2622] text-base tracking-[-0.40px] leading-6 whitespace-nowrap">
                    PREPSTREAK
                  </span>
                </div>
              </div>
            </div>

            <div className="flex w-[211.3px] h-11 items-center gap-3 relative">
              <div className="flex w-[96.45px] h-11 items-center gap-2 px-4 py-0 relative bg-[#f5ebe0] rounded-[16777200px] border-2 border-solid border-[#2b2622]">
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src="https://c.animaapp.com/HBCDjswS/img/icon-1.svg"
                />
                <div className="relative w-[33px] h-9">
                  <time className="absolute top-[5px] -left-px w-[42px] [font-family:'Inter',Helvetica] font-normal text-[#2b2622] text-base tracking-[0] leading-6">
                    {timeRemaining}s
                  </time>
                </div>
              </div>

              <button
                className="all-[unset] box-border flex h-10 items-center gap-2 px-4 py-0 flex-1 grow bg-amber-400 border-2 border-solid relative rounded-[16777200px] border-[#2b2622] cursor-pointer"
                onClick={handlePauseClick}
                aria-label="Pause quiz"
              >
                <img
                  className="relative w-4 h-4"
                  alt=""
                  src="https://c.animaapp.com/HBCDjswS/img/icon-2.svg"
                />
                <span className="relative flex-1 grow h-5">
                  <span className="absolute top-px left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-sm text-center tracking-[0.32px] leading-5 whitespace-nowrap">
                    Pause
                  </span>
                </span>
              </button>
            </div>
          </nav>

          <div
            className="flex flex-col h-6 items-start pl-[3px] pr-[715px] py-[3px] relative self-stretch w-full bg-white rounded-[16777200px] overflow-hidden border-[3px] border-solid border-[#2b2622]"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Quiz progress"
          >
            <div className="flex h-[18px] items-center justify-end pl-0 pr-2 py-0 relative self-stretch w-full bg-[linear-gradient(180deg,rgba(251,191,36,1)_0%,rgba(245,158,11,1)_50%,rgba(239,71,58,1)_100%)]">
              <div className="relative w-[25.91px] h-4">
                <span className="absolute top-px left-0 w-[26px] [font-family:'Inter',Helvetica] font-normal text-white text-xs tracking-[0] leading-4">
                  {progress}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex ml-[224.5px] w-[896px] h-[538px] relative flex-col items-start gap-6 pt-11 pb-1 px-11 bg-white rounded-[32px] border-4 border-solid border-[#2b2622] shadow-[5px_5px_0px_#2b2622d9]">
        <div className="flex h-10 items-start gap-4 relative self-stretch w-full">
          <div className="flex w-10 h-10 items-center justify-center relative bg-[#ef473a] rounded-[16777200px] border-2 border-solid border-[#2b2622]">
            <span className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap">
              1
            </span>
          </div>

          <h1 className="relative flex-1 grow h-[25.59px]">
            <span className="absolute -top-px left-0 [font-family:'Inter',Helvetica] font-normal text-[#2b2622] text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
              {questionText}
            </span>
          </h1>
        </div>

        <fieldset className="flex flex-col h-[296px] items-start gap-4 relative self-stretch w-full border-0 p-0 m-0">
          <legend className="sr-only">Select an answer</legend>
          {answers.map((answer) => (
            <button
              key={answer.id}
              className="all-[unset] box-border relative self-stretch w-full h-[62px] bg-white rounded-2xl border-[3px] border-solid border-[#2b2622] cursor-pointer"
              onClick={() => handleAnswerClick(answer.id)}
              role="radio"
              aria-checked={selectedAnswer === answer.id}
            >
              <div className="flex w-fit h-[18px] items-start relative top-[22px] left-[27px]">
                <span className="relative w-fit mt-[-1.00px] mb-[-4.50px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-base tracking-[0.32px] leading-6 whitespace-nowrap">
                  {answer.text}
                </span>
              </div>
            </button>
          ))}
        </fieldset>

        <div className="flex h-[66px] items-start gap-3 relative self-stretch w-full">
          <button
            className="all-[unset] box-border flex w-[108.5px] h-[66px] items-center gap-2 px-6 py-0 bg-amber-400 border-2 border-solid relative rounded-[16777200px] border-[#2b2622] cursor-pointer"
            onClick={handleHintClick}
            aria-label="Get a hint"
          >
            <img
              className="relative w-5 h-5"
              alt=""
              src="https://c.animaapp.com/HBCDjswS/img/icon-3.svg"
            />
            <span className="relative flex-1 grow h-5">
              <span className="absolute top-px left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#2b2622] text-sm text-center tracking-[0.32px] leading-5 whitespace-nowrap">
                Hint
              </span>
            </span>
          </button>

          <button
            className="all-[unset] box-border flex w-[110.85px] h-[66px] items-center gap-2 px-6 py-0 bg-[#6b6661] border-2 border-solid relative rounded-[16777200px] border-[#2b2622] cursor-pointer"
            onClick={handleSkipClick}
            aria-label="Skip question"
          >
            <img
              className="relative w-5 h-5"
              alt=""
              src="https://c.animaapp.com/HBCDjswS/img/icon-4.svg"
            />
            <span className="relative flex-1 grow h-5">
              <span className="absolute top-px left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-sm text-center tracking-[0.32px] leading-5 whitespace-nowrap">
                Skip
              </span>
            </span>
          </button>

          <button
            className="all-[unset] box-border flex-1 grow h-[66px] bg-[#1e5f4d] border-[3px] border-solid shadow-[5px_5px_0px_#2b2622d9] opacity-50 relative rounded-[16777200px] border-[#2b2622] cursor-pointer disabled:cursor-not-allowed"
            onClick={handleNextClick}
            disabled={selectedAnswer === null}
            aria-label="Next question"
          >
            <span className="absolute top-[22px] left-[221px] [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-base text-center tracking-[0.32px] leading-6 whitespace-nowrap">
              NEXT QUESTION
            </span>
          </button>
        </div>
      </main>
    </div>
  );
};
