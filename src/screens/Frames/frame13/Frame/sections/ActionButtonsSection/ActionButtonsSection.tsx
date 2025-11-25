import React from "react";
import { useNavigate } from "react-router-dom";

interface ActionButton {
  id: string;
  label: string;
  icon: string;
  iconPosition: "left" | "right";
  backgroundColor: string;
  textColor: string;
  ariaLabel: string;
  onClick: () => void;
}

export const ActionButtonsSection = (): JSX.Element => {
  const navigate = useNavigate();

  const actionButtons: ActionButton[] = [
    {
      id: "retry",
      label: "RETRY TEST",
      icon: "https://c.animaapp.com/kCcw4DfZ/img/icon.svg",
      iconPosition: "left",
      backgroundColor: "#f5ebe0",
      textColor: "#2b2622",
      ariaLabel: "Retry test",
      onClick: () => navigate('/test/setup/step1'),
    },
    {
      id: "dashboard",
      label: "DASHBOARD",
      icon: "https://c.animaapp.com/kCcw4DfZ/img/icon-1.svg",
      iconPosition: "right",
      backgroundColor: "#1e5f4d",
      textColor: "white",
      ariaLabel: "Go to dashboard",
      onClick: () => navigate('/dashboard'),
    },
  ];

  return (
    <section
      className="flex w-[664px] h-[66px] items-start gap-4 absolute top-[912px] left-[52px]"
      role="group"
      aria-label="Action buttons"
    >
      {actionButtons.map((button) => (
        <button
          key={button.id}
          onClick={button.onClick}
          className="all-[unset] box-border relative flex-1 grow h-[66px] rounded-[16777200px] border-[3px] border-solid border-[#2b2622] shadow-[5px_5px_0px_#2b2622d9] cursor-pointer transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_#2b2622d9] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b2622]"
          style={{ backgroundColor: button.backgroundColor }}
          aria-label={button.ariaLabel}
          type="button"
        >
          {button.iconPosition === "left" && (
            <img
              className="absolute top-[23px] left-[97px] w-5 h-5"
              alt=""
              src={button.icon}
              aria-hidden="true"
            />
          )}

          <span
            className="absolute top-[22px] [font-family:'Space_Grotesk',Helvetica] font-bold text-base text-center tracking-[0.32px] leading-6 whitespace-nowrap"
            style={{
              color: button.textColor,
              left: button.iconPosition === "left" ? "130px" : "100px",
            }}
          >
            {button.label}
          </span>

          {button.iconPosition === "right" && (
            <img
              className="absolute top-[23px] left-[209px] w-5 h-5"
              alt=""
              src={button.icon}
              aria-hidden="true"
            />
          )}
        </button>
      ))}
    </section>
  );
};
