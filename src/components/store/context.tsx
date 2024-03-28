import { type ReactNode, useContext, createContext, useReducer } from "react";
export type timerType = {
  name: string;
  duration: number;
};
type timersState = {
  isRunning: boolean;
  timers: timerType[];
};

type contextType = timersState & {
  addTimer: (data: timerType) => void;
  startTimer: () => void;
  stopTimer: () => void;
};
const Context = createContext<contextType | null>(null);

type addAction = {
  type: "addTimer";
  payload: timerType;
};
type startAction = {
  type: "startTimer";
};
type stopAction = {
  type: "stopTimer";
};
type timerAction = addAction | startAction | stopAction;
const timerReducer = (state: timersState, action: timerAction): timersState => {
  switch (action.type) {
    case "addTimer": {
      return {
        ...state,
        timers: [...state.timers, action.payload],
      };
      break;
    }
    case "startTimer": {
      return {
        ...state,
        isRunning: true,
      };
      break;
    }
    case "stopTimer": {
      return {
        ...state,
        isRunning: false,
      };
    }
  }
};

export const useTimersContext = () => {
  const timerCtx = useContext(Context);
  if (timerCtx === null) throw new Error("Timer Context is null");

  return timerCtx;
};
type propsType = {
  children: ReactNode;
};
const ContextProvider = ({ children }: propsType) => {
  const initialState: timersState = {
    isRunning: false,
    timers: [],
  };
  const [state, dispatch] = useReducer(timerReducer, initialState);
  const value: contextType = {
    isRunning: state.isRunning,
    timers: state.timers,
    addTimer(data: timerType) {
      dispatch({ type: "addTimer", payload: data });
    },
    startTimer() {
      dispatch({ type: "startTimer" });
    },
    stopTimer() {
      dispatch({ type: "stopTimer" });
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
