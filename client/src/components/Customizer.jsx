import React from "react";
import { useSnapshot } from "valtio";

import CustomButton, { ColorButton, TextureButton } from "./CustomButton";
import state from "../store";

export default function Customizer() {
  const snap = useSnapshot(state);

  return (
    <div className="absolute bottom-0 z-10 w-full flex justify-center gap-20">
      <div className="flex items-center w-[150px]"><BackButton /></div>
      <div className=" flex flex-col items-center gap-2">
        <ColorChanger />
        <TextureChanger />
      </div>
      <div className="flex items-center w-[150px]"><NextButton /></div>
    </div>
  );
}

function BackButton() {
  const snap = useSnapshot(state);

  return (
    <>
    {snap.intro == "Avatar" && <CustomButton
        type="filled"
        title="Back to Home"
        handleClick={() => (state.intro = "Home")}
        customStyles="w-fit px-4 py-2.5 font-bold text-sm"
      />}
      {snap.intro == "Dress" && <CustomButton
        type="filled"
        title="Back to Avatar"
        handleClick={() => (state.intro = "Avatar")}
        customStyles="w-fit px-4 py-2.5 font-bold text-sm"
      />}
      {snap.intro == "Simulator" && <CustomButton
        type="filled"
        title="Back to Dress"
        handleClick={() => (state.intro = "Dress")}
        customStyles="w-fit px-4 py-2.5 font-bold text-sm"
      />}
    </>
    
  );
}

function NextButton() {
  const snap = useSnapshot(state);


  return (
    <>
      {snap.intro == "Avatar" && <CustomButton
        type="filled"
        title="Go to Dress"
        handleClick={() => (state.intro = "Dress")}
        customStyles="w-fit px-4 py-2.5 font-bold text-sm"
      />}
      {snap.intro == "Dress" && <CustomButton
        type="filled"
        title="Go to Simulator"
        handleClick={() => (state.intro = "Simulator")}
        customStyles="w-fit px-4 py-2.5 font-bold text-sm"
      />}
    </>
  );
}

function ColorChanger() {
  const snap = useSnapshot(state);

  const presetColors = ["red", "blue", "green", "yellow", "purple", "orange"];

  const renderColorButtons = () => {
    return presetColors.map((color) => (
      <ColorButton key={color} color={color} />
    ));
  };
  return (
    <div className=" flex bg-slate-300 w-[50vw] rounded-lg px-4 py-2">
      <div className="flex gap-4 items-center">
        <div>Change Color</div>
        {renderColorButtons()}
      </div>
    </div>
  );
}

function TextureChanger() {
  const snap = useSnapshot(state);
  const presetTextures = ["react", "threejs", "swatch", "tshirt", "s-tshirt"];

  const renderTextureButtons = () => {
    return presetTextures.map((texture) => (
      <TextureButton key={texture} texture={texture} />
    ));
  };

  return (
    <div className=" flex bg-slate-300 w-[50vw] rounded-lg px-4 py-2">
      <div className="flex gap-4 items-center">
        <div>Change Texture</div>
        {renderTextureButtons()}
      </div>
    </div>
  );
}
