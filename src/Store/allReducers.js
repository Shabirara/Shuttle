import {combineReducers} from 'redux';
import {LoginReducer} from '../Screen/Login/Redux/LoginReducer';
import GlobalReducer from './globalReducer';
import HomeReducer from '../Screen/Home/Redux/HomeReducer';

export const allReducers = combineReducers({
  Global: GlobalReducer,
  HomeReducer,
  LoginReducer,
});
