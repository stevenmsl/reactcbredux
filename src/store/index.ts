import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

/* #TA04 */
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

/* #TA08 */
export type RootState = ReturnType<typeof store.getState>;

export default store;
