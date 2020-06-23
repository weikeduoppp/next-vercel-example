import { combineReducers } from 'redux'
import * as types from './types'

// 数值
interface CounterFunc {
  (state: number, action: { type: string, payload?: number }): number;
}

const counterReducer: CounterFunc = (state = 0, { type }) => {
   switch (type) {
     case types.INCREMENT:
       return state + 1;
     case types.DECREMENT:
       return state - 1;
     case types.RESET:
       return 0;
     default:
       return state;
   }
};

// index页
export interface HomeStateInterface {
  name: string;
  avatar: string;
  login_status: number;
}

const HomeState: HomeStateInterface = {
  name: "您",
  avatar: '',
  //  1/0
  login_status: 0
};

interface HomeFunc {
  ( state: HomeStateInterface, action: { type: string; payload: HomeStateInterface } ): HomeStateInterface
}

const HomeReducer: HomeFunc = (state = HomeState, { type, payload }) => {
  switch (type) {
    case types.UPDATE:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};


interface ReducersFunc {
  counter: CounterFunc,
  home: HomeFunc
}

const reducers: ReducersFunc = {
  counter: counterReducer,
  home: HomeReducer,
};


export default combineReducers(reducers)

