import React from "react";

import TipButton from "../TipButton";

const tipsPercentages = [5, 10, 15, 25, 50];

export default function TipArea({ setTip, setIsCustomTip, isCustomTip, tip }) {
  return (
    <>
      {tipsPercentages.map((tip, i) => {
        return (
          <TipButton
            key={i}
            tip={tip}
            setTip={setTip}
            setIsCustomTip={setIsCustomTip}
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
          value={tip}
          className="customInput"
          onChange={(e) => setTip(e.target.value)}
        />
      )}
    </>
  );
}
