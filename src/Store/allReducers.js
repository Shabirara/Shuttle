import { combineReducers } from 'redux'
import GlobalReducer from './globalReducer'

export const allReducers = combineReducers({
    Global: GlobalReducer
})