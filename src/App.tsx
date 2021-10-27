import * as React from "react";
import "./styles.css";

import Instructions from "./Instructions";
import Counter from "./Counter";

export default function App() {
  const [counter, setCounter] = React.useState<number>(0);
  const [decrementBy, setDecrementBy] = React.useState<number>(0);
  return (
    <div className="App">
      <h1>DataThings Front-end Exercise</h1>
      <div>
        <div>
          <Instructions />
        </div>
        <div
          style={{
            marginTop: 60,
            backgroundColor: "#F2F2F2",
            padding: 15,
            borderRadius: 5
          }}
        >
          <>
            <h3>Counter:</h3>
            <Counter
              counter={counter}
              incrementCounter={() => setCounter((prevState) => prevState + 1)}
              decrementCounter={() => setCounter((prevState) => prevState - 1)}
              incrementCounterBy={(value: number) =>
                setCounter((prevState) => prevState + value)
              }
            />
            <div className="input-div" style={{ marginTop: 15 }}>
              <input
                onChange={(event) => setDecrementBy(Number(event.target.value))}
                type="number"
                value={decrementBy}
              />
              <button
                onClick={() =>
                  setCounter((prevState) => prevState - Number(decrementBy))
                }
              >
                Increment by
              </button>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
