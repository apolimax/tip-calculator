import React from "react";

export default function TipButton({
  tip,
  selectedTip,
  setSelectedTip,
  setIsCustomTip,
  isCustomTip,
}) {
  return (
    <button
      type="button"
      onClick={() => {
        setSelectedTip(tip);
        setIsCustomTip(false);
      }}
      className={!isCustomTip && tip === selectedTip ? "selectedTip" : ""}
    >
      {tip}%
    </button>
  );
}
