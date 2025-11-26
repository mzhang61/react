// src/redux/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import countReducer from './reducers/count';
import personReducer from './reducers/person';
import { thunk } from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
  he: countReducer,   // sum
  rens: personReducer // people array
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;