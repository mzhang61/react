// src/redux/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import countReducer from './reducers/count';
import personReducer from './reducers/person';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  he: countReducer,   // sum
  rens: personReducer // people array
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;