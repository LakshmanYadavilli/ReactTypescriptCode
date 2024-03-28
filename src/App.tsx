import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useCounterDispatch,
  useCounterSelector,
} from "./components/hooks/useCounterDispatch";

import Header from "./components/Timer/headers";
import "./App.css";
import CustomButton from "./components/ui/customButton";

function App() {
  const ctx = useCounterSelector((state) => state.slice);
  // const d=useDispatch()
  const dispatch = useCounterDispatch();
  return (
    <>
      <Header />
      <h1>{ctx.count}</h1>
    </>
  );
}

export default App;
