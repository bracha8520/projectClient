import { createStore, combineReducers, applyMiddleware } from 'redux';
import userRducer from './reducers.js/userRducer';
import pictureReducer from './reducers.js/pictureReducer'

const reducer = combineReducers({ userRducer, pictureReducer });

const store = createStore(reducer);
window.store = store;
export default store;
