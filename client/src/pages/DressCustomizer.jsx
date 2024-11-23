import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import {
  CustomButton,
} from "../components";
import Customizer from "../components/Customizer";

const DressCustomizer = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {(snap.intro == "DressCustomizer") && (
        <div className="absolute bottom-0 w-full z-10 flex flex-col justify-between">
          <div className="bottom-bar flex justify-between px-8 py-6">
            <span>
              <CustomButton
                type="filled"
                title="Back to avatar"
                handleClick={() => (state.intro = "AvatarCustomizer")}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </span>
            <Customizer />
            <span>
              <CustomButton
                type="filled"
                title="Go to simulator"
                handleClick={() => (state.intro = "Simulator")}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                buttonColor="#018e27"
              />
            </span>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DressCustomizer;
