import { Dispatch } from "redux";
import * as types from "./types";
import * as STATE from "./reducers";

// INCREMENT COUNTER BY 1
export const incrementCount = () => ({ type: types.INCREMENT });

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: types.DECREMENT });

// RESET COUNTER
export const resetCount = () => ({ type: types.RESET });

// 更新Home
export const updateHome = (state: STATE.HomeStateInterface) => (
  dispatch: Dispatch
) =>
  dispatch({
    type: types.UPDATE,
    payload: { ...state },
  });
