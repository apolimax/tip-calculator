import React from "react";

import TipButton from "../TipButton";

const tipsPercentages = [5, 10, 15, 25, 50];

export default function TipArea({
  setSelectedTip,
  setIsCustomTip,
  isCustomTip,
  selectedTip,
}) {
  return (
    <>
      {tipsPercentages.map((tip, i) => {
        return (
          <TipButton
            key={i}
            tip={tip}
            selectedTip={selectedTip}
            setSelectedTip={setSelectedTip}
            setIsCustomTip={setIsCustomTip}
            isCustomTip={isCustomTip}
          />
        );
      })}
      {!isCustomTip ? (
        <button
          type="button"
          className="customBtn"
          onClick={() => setIsCustomTip(true)}
        >
          Custom
        </button>
      ) : (
        <input
          type="number"
          value={selectedTip}
          className="customInput"
          onChange={(e) => setSelectedTip(e.target.value)}
        />
      )}
    </>
  );
}
