import React from "react";

export default function TipButton({ tip, setTip, setIsCustomTip }) {
  return (
    <button
      type="button"
      onClick={() => {
        setTip(tip);
        setIsCustomTip(false);
      }}
    >
      {tip}%
    </button>
  );
}
