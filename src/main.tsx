import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";
import store from "./components/store/store.ts";
import TimerContextProvider from "./components/store/context.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <TimerContextProvider>
        <App />
      </TimerContextProvider>
    </Provider>
  </React.StrictMode>
);
