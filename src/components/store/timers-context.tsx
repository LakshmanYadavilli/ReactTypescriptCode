import React, { ReactNode, createContext, useContext, useReducer } from "react";

type timerType = {
  name: string;
  duration: number;
};
type TimersState = {
  isRunning: boolean;
  timers: timerType[];
};

type TimerContextValue = TimersState & {
  addTimer: (data: timerType) => void;
  startTimer: () => void;
  stopTimer: () => void;
};
const TimerContext = createContext<TimerContextValue | null>(null);

export const useTimersContext = () => {
  const timerCtx = useContext(TimerContext);

  if (timerCtx === null) throw new Error("Context is null");
  return timerCtx;
};
type providerProps = {
  children: ReactNode;
};
type addTimerAction = {
  type: "addTimer";
  payload: timerType;
};
type toggleAction = {
  type: "toggle";
};

function timersReducer(
  state: TimersState,
  action: addTimerAction | toggleAction
): TimersState {
  switch (action.type) {
    case "addTimer": {
      return {
        ...state,
        timers: [...state.timers, action.payload],
      };
      break;
    }
    case "toggle": {
      return {
        ...state,
        isRunning: !state.isRunning,
      };
      break;
    }
    default: {
      return state;
    }
  }
}
const TimerContextProvider = ({ children }: providerProps) => {
  const initialState: TimersState = {
    isRunning: false,
    timers: [],
  };
  const [timerState, dispatch] = useReducer(timersReducer, initialState);
  const value = {
    isRunning: timerState.isRunning,
    timers: timerState.timers,
    startTimer() {
      dispatch({ type: "toggle" });
    },
    stopTimer() {
      dispatch({ type: "toggle" });
    },
    addTimer(data: timerType) {
      dispatch({
        type: "addTimer",
        payload: data,
      });
    },
  };

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
};

export default TimerContextProvider;
