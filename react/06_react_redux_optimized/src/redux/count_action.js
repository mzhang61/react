// src/redux/count_action.js
import { INCREMENT, DECREMENT } from './constant';

// sync actions
export const createIncrementAction = data => ({ type: INCREMENT, data });
export const createDecrementAction = data => ({ type: DECREMENT, data });

// async action (needs redux-thunk)
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data));
    }, time);
  };
};