import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounterAction } from "./modules/counter";
import "./styles.css";

const Counter1 = () => {
  const dispatch = useDispatch();
  const counterState = useSelector((state) => state.counter);
  return (
    <>
      <p>current: {counterState}</p>
      <button onClick={() => dispatch(increaseCounterAction())}>
        INCREMENT
      </button>
    </>
  );
};

const Counter2 = () => {
  const [counterState, setCounterState] = useState(0);
  return (
    <>
      <p>current: {counterState}</p>
      <button onClick={() => setCounterState(counterState + 1)}>
        INCREMENT
      </button>
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <Counter1 />
      <Counter2 />
    </div>
  );
}
