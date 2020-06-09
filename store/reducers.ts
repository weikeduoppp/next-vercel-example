import { combineReducers } from 'redux'
import * as types from './types'

// 数值
interface counterFunc {
  (state: number, action: { type: string, payload?: number }): number;
}

const counterReducer: counterFunc = (state = 0, { type }) => {
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
  age: number
}

const HomeState: HomeStateInterface = {
  name: "yewq",
  age: 18,
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


interface reducersFunc {
  counter: counterFunc,
  home: HomeFunc
}

const reducers: reducersFunc = {
  counter: counterReducer,
  home: HomeReducer,
};


export default combineReducers(reducers)