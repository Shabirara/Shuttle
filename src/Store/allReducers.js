import { combineReducers } from 'redux'
import GlobalReducer from './globalReducer'
import HomeReducer from '../Screen/Home/Redux/HomeReducer'

export const allReducers = combineReducers({
    Global: GlobalReducer,
    HomeReducer
})