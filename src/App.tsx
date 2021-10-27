import * as React from "react";
import "./styles.css";

import Instructions from "./Instructions";
import Counter from "./Counter";

export default function App() {
  const [counter, setCounter] = React.useState<number>(0);

  // Created a function to keep the logic of not decrementing after 0 in one place 
  const decrement = (value: number) => {
    if (counter - value >= 0) {
      setCounter((prevState) => prevState - value)
    }
  }

  //provide empty dependencys so that the alert is only fired once the page loads  and not on each state change
  React.useEffect(() => {
    window.alert('Page loaded')
  }, []);

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
              decrementCounter={() => decrement(1)}
              incrementCounterBy={(value: number) =>
                setCounter((prevState) => prevState + value)
              }
              decrementCounterBy={(value: number) => decrement(value)
              }
            />
          </>
        </div>
      </div>
    </div>
  );
}
