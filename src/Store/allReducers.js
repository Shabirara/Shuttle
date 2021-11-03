import { combineReducers } from 'redux';
import { LoginReducer } from '../Screen/Login/Redux/LoginReducer';
import { RegisterReducer } from '../Screen/Register/Redux/RegisterReducer';
import GlobalReducer from './globalReducer';
import HomeReducer from '../Screen/Home/Redux/HomeReducer';
import ProfileReducer from '../Screen/Profile/Redux/ProfileReducer';
import BookingReducer from '../Screen/My Booking/Redux/BookingReducer';

export const allReducers = combineReducers({
  Global: GlobalReducer,
  HomeReducer,
  LoginReducer,
  RegisterReducer,
  ProfileReducer,
  BookingReducer
});
