import React from "react";
import { Container } from "./sections/Container";
import { Sidebar } from "./sections/Sidebar";

export const Frame = () => {
  return (
    <div
      className="flex flex-col h-[1579px] items-start relative bg-[linear-gradient(180deg,rgba(245,235,224,1)_0%,rgba(253,246,237,1)_100%)]"
      data-model-id="11:4948"
    >
      <div className="relative self-stretch w-full h-[1579.49px] mb-[-0.49px]">
        <Sidebar />
        <Container />
      </div>
    </div>
  );
};
