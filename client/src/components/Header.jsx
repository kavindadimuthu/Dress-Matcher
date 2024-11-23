import React from "react";
import { profile } from "../assets";

export const Header = () => {

  return (
    <header className="header absolute top-0 z-10 w-full">
      <div className="top-bar flex justify-between items-center px-20 py-6">
        <span className="logo font-bold text-[1.5rem]">Nike</span>
        <h1 className="font-bold text-[2rem]">Dress Matcher</h1>
        <span className="flex items-center gap-2">
          Hi Johnny
          <div className="w-10">
            <img src={profile} alt="" />
          </div>
        </span>
      </div>
    </header>
  );
};
