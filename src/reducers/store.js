import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(
  rootReducer,
  composeWithDevTools()
);
export default store;