import React from "react";

import TipButton from "../TipButton";

const tipsPercentages = [5, 10, 15, 25, 50];

export default function TipArea({ setTip, setIsCustomTip }) {
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
    </>
  );
}
