import React from "react";
import { Container } from "./sections/Container";
import { Sidebar } from "./sections/Sidebar";

export const Frame = () => {
  return (
    <div
      className="w-full min-w-[1390px] min-h-[1116.53px] relative"
      data-model-id="11:1048"
    >
      <div className="absolute top-0 left-0 w-[1390px] h-[1116px] bg-[linear-gradient(180deg,rgba(245,235,224,1)_0%,rgba(253,246,237,1)_100%)]" />

      <div className="absolute top-0 left-0 w-[1390px] h-[1117px] flex">
        <div className="w-[1390px] flex gap-10">
          <Sidebar />
          <Container />
        </div>
      </div>
    </div>
  );
};
