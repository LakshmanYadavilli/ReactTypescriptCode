import React, { useState } from "react";
import { useTimersContext } from "../store/context";
import Timer from "./Timer";
const Timers = () => {
  const timerCtx = useTimersContext();

  console.log("Timer Component");
  return (
    <div>
      {timerCtx.timers.map((timer) => (
        <Timer key={timer.name} {...timer} />
      ))}
    </div>
  );
};

export default Timers;
