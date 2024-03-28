import React, { useEffect, useRef, useState } from "react";
import { LinearProgress } from "@mui/material";
import css from "./timer.module.css";
import { useTimersContext } from "../store/context";

type propsType = {
  name: string;
  duration: number;
};
const Timer = ({ name, duration }: propsType) => {
  const [timer, setTimer] = useState(duration * 1000);
  const balance = useRef<number | null>(null);
  const { isRunning } = useTimersContext();

  if (timer <= 0 && balance.current) clearInterval(balance.current);
  useEffect(() => {
    let timerId: number;
    if (isRunning) {
      timerId = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 0) return timer;
          else return prev - 1000;
        });
      }, 1000);
      balance.current = timerId;
    } else {
      if (balance.current) clearInterval(balance.current);
    }

    return () => clearInterval(timerId);
  }, [isRunning]);
  return (
    <div key={name} className={css.container}>
      <h1>{name}</h1>

      <LinearProgress
        variant="determinate"
        value={(timer / (duration * 1000)) * 100}
      />
      <p>{((timer / (duration * 1000)) * 100).toFixed(2)}% Left</p>
    </div>
  );
};

export default Timer;
