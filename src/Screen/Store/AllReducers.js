import {combineReducers} from 'redux';
import {LoginReducer} from '../Login/Redux/LoginReducer';
import {RegisterReducer} from '../Register/Redux/RegisterReducer';
import globalReducer from './globalReducer';

export const AllReducers = combineReducers({
  LoginReducer,
  RegisterReducer,
  globalReducer,
});
