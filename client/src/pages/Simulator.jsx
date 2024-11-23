import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import {
  CustomButton,
} from "../components";

const Simulator = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro == "Simulator" && (
        <div className="absolute bottom-0 w-full z-10 flex flex-col justify-between">
          <div className="bottom-bar flex justify-between px-8 py-6">
            <span>
              <CustomButton
                type="filled"
                title="Back to dress"
                handleClick={() => (state.intro = "DressCustomizer")}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </span>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Simulator;
