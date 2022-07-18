import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* #TA01 */
export type CounterStateType = {
  counter: number;
  show: boolean;
};

const initCounterState: CounterStateType = { counter: 0, show: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initCounterState,
  /* #TA02
  with the help of the toolkit, you can mutate the state directly */
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action: PayloadAction<number>) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.show = !state.show;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
