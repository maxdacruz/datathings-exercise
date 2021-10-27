import React from "react";

const Instructions: React.FunctionComponent = () => {
  return (
    <>
      <h2>Task list</h2>
      <form style={{ textAlign: "start", maxWidth: "70vw", marginTop: 15 }}>
        <input type="checkbox"></input>
        <label>
          Encapsulate the DecrementBy component into the Counter component.{" "}
          <span style={{ fontStyle: "italic" }}>
            Don't forget to import and to pass the state as props to the child
            component.
          </span>
        </label>
      </form>
      <form style={{ textAlign: "start", maxWidth: "70vw", marginTop: 15 }}>
        <input type="checkbox"></input>
        <label>
          Don't let the counter go to negative values (-1...). You should only
          need a checker for the value on the Decrement state update and make
          sure that it does not go bellow 0.
        </label>
      </form>
      <form style={{ textAlign: "start", maxWidth: "70vw", marginTop: 15 }}>
        <input type="checkbox"></input>
        <label>
          Give a notification saying "Page loaded" when the page mounts. For
          that you should use the UseEffect() hook provided by React together
          with the window.alert() method for the notification.
        </label>
      </form>
      <div style={{ marginTop: 30 }}>
        <text>Good luck! :)</text>
      </div>
    </>
  );
};

export default Instructions;
