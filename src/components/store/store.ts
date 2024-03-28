import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
const store = configureStore({
  reducer: {
    todo: counterSlice.reducer,
  },
});
export type rootState = ReturnType<typeof store.getState>;
export type dispatchType = typeof store.dispatch;
export default store;
