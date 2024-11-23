import React from 'react'
import { useSnapshot } from 'valtio';

import state from '../store';
import { getContrastingColor } from '../config/helpers';

const CustomButton = ({ type, title, customStyles, handleClick, buttonColor }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if(type === 'filled') {
      return {
        backgroundColor: buttonColor ? buttonColor : snap.color,
        // backgroundColor: snap.color,
        color: getContrastingColor(snap.color)
      }
    } else if(type === "outline") {
      return {
        borderWidth: '1px',
        borderColor: snap.color,
        color: snap.color
      }
    }
  }

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton


export function ColorButton({ color }) {
  return (
    <button
      className="w-8 h-8 rounded-full border border-gray-300"
      style={{ backgroundColor: color }}
      onClick={() => (
        state.dressColor = color,
        console.log(state.dressColor)
      )}
    />
  );

}

export function TextureButton({ texture }) {
  return (
    <button
      className="w-8 h-8 rounded-full border border-gray-300"
      style={{
        backgroundImage: `url(./logos//${texture}.png)`,
        backgroundSize: "cover",
      }}
      onClick={() => (
        state.logoDecal = `./logos/${texture}.png`,
        console.log(state.logoDecal)
      )}
    />
  );
}