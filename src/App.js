import { useState } from "react";

import "./App.css";

function App() {
  const [billValue, setBillValue] = useState(0);
  const [nPeople, setNPeople] = useState(1);
  const [tip, setTip] = useState(0);
  const [isCustomTip, setIsCustomTip] = useState(false);

  const resetValues = () => {
    setBillValue(0);
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
          <div className="inputGroup">
            <h2>Bill</h2>
            <input
              value={billValue}
              onChange={(e) => setBillValue(e.target.value)}
              type="number"
            />
          </div>
          <div className="tip">
            <h2>Select Tip %</h2>
            <div className="grid-buttons">
              <button
                type="button"
                onClick={() => {
                  setTip(5);
                  setIsCustomTip(false);
                }}
              >
                5%
              </button>
              <button
                type="button"
                onClick={() => {
                  setTip(10);
                  setIsCustomTip(false);
                }}
              >
                10%
              </button>
              <button
                type="button"
                onClick={() => {
                  setTip(15);
                  setIsCustomTip(false);
                }}
              >
                15%
              </button>
              <button
                type="button"
                onClick={() => {
                  setTip(25);
                  setIsCustomTip(false);
                }}
              >
                25%
              </button>
              <button
                type="button"
                onClick={() => {
                  setTip(50);
                  setIsCustomTip(false);
                }}
              >
                50%
              </button>
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
            <div className="inputGroup">
              <h2>Number of people</h2>
              <input
                value={nPeople}
                onChange={(e) => setNPeople(e.target.value)}
                type="number"
                min="0"
              />
            </div>
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
                ? ((billValue / nPeople) * (tip / 100)).toFixed(2)
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
              {billValue && nPeople >= 1 ? (billValue / nPeople).toFixed(2) : 0}
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
