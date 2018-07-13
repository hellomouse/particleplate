import * as Redux from 'redux';

const defaultState = {
  counter: 1
};

export type Action = {
  type: 'INCREMENT'
} | {
  type: 'DECREMENT'
};

export type State = {
  counter: number
};

const store = Redux.createStore((state: State, action: Action): State => {
  if (action.type == 'INCREMENT') {
    return { ...state, counter: state.counter + 1 };
  } else if (action.type == 'DECREMENT') {
    return { ...state, counter: state.counter - 1 };
  }
  return state;
}, defaultState);

export default store;
