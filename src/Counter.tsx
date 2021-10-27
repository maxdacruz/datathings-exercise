import React from "react";

interface CounterProps {
  counter: number;
  incrementCounter: () => void;
  decrementCounter: () => void;
  incrementCounterBy: (value: number) => void;
  decrementCounterBy: (value: number) => void;

}

const Counter: React.FunctionComponent<CounterProps> = ({
  counter,
  incrementCounter,
  decrementCounter,
  incrementCounterBy,
  decrementCounterBy
}) => {
  const [incrementBy, setIncrementBy] = React.useState<number>(0);
  const [decrementBy, setDecrementBy] = React.useState<number>(0);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <button style={{ cursor: "pointer" }} onClick={decrementCounter}>
          -
        </button>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#DBDBDB",
            width: 50,
            margin: "0px 15px",
            borderRadius: 5
          }}
        >
          {counter}
        </div>
        <button style={{ cursor: "pointer" }} onClick={incrementCounter}>
          +
        </button>
      </div>
      <div className="input-div" style={{ marginTop: 15 }}>
        <input
          onChange={(event) => setIncrementBy(Number(event.target.value))}
          type="number"
          value={incrementBy}
        />
        <button onClick={() => incrementCounterBy(Number(incrementBy))}>
          Increment by
        </button>
      </div>
      <div className="input-div" style={{ marginTop: 15 }}>
        <input
          onChange={(event) => setDecrementBy(Number(event.target.value))}
          type="number"
          value={decrementBy}
        />
        <button
          onClick={() =>
            decrementCounterBy(Number(decrementBy))
          }
        >
          Decrement by
        </button>
      </div>
    </>
  );
};

export default Counter;
