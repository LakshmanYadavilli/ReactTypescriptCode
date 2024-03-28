import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
type sliceState = {
  count: number;
};
const initialState: sliceState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      const { payload = 1 } = action;
      state.count += payload;
    },
    decrement(state, action: PayloadAction<number>) {
      const { payload = 1 } = action;
      state.count -= payload;
    },
  },
});
export const { increment, decrement } = counterSlice.actions;
export default counterSlice;
