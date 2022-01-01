import { useState } from "react";

import "./App.css";
import Input from "./components/Input";
import TipArea from "./components/TipArea";

export const tipAmountPerPerson = (billValue, nPeople, tip) => {
  return (billValue / nPeople) * (tip / 100);
};

export const totalAmountPerPerson = (billValue, nPeople) => {
  return billValue / nPeople;
};

function App() {
  const [billValue, setBillValue] = useState("");
  const [nPeople, setNPeople] = useState(1);
  const [tip, setTip] = useState(0);
  const [isCustomTip, setIsCustomTip] = useState(false);

  const resetValues = () => {
    setBillValue("");
    setNPeople(1);
    setTip(0);
  };

  return (
    <div className="App">
      <h1>
        <span>SPLI</span>
        <br />
        <span>TTER</span>
      </h1>
      <main className="calcContainer">
        <div className="input">
          <Input label="Bill" value={billValue} onChange={setBillValue} />
          <div className="tip">
            <h2>Select Tip %</h2>
            <div className="grid-buttons">
              <TipArea setTip={setTip} setIsCustomTip={setIsCustomTip} />
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
            </div>
          </div>
          {nPeople < 1 ? (
            <div className="inputGroupError">
              <div className="cantBeZero">
                <h2>Number of people</h2>
                <h3 style={{ color: "red" }}>Can't be zero</h3>
              </div>
              <input
                value={nPeople}
                onChange={(e) => setNPeople(e.target.value)}
                type="number"
                min="0"
              />
            </div>
          ) : (
            <Input
              label="Number of people"
              value={nPeople}
              onChange={setNPeople}
            />
          )}
        </div>
        <div className="output">
          <div>
            <p>
              <span className="amountLabel">Tip Amount</span> <br />
              <span className="perPerson">/ person</span>
            </p>
            <p className="calcResult">
              $
              {billValue && nPeople >= 1 && tip
                ? tipAmountPerPerson(billValue, nPeople, tip).toFixed(2)
                : 0}
            </p>
          </div>
          <div>
            <p>
              <span className="amountLabel">Total</span> <br />
              <span className="perPerson">/ person</span>
            </p>
            <p className="calcResult">
              $
              {billValue && nPeople >= 1
                ? totalAmountPerPerson(billValue, nPeople).toFixed(2)
                : 0}
            </p>
          </div>
          <button type="button" onClick={resetValues} disabled={!billValue}>
            RESET
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
