import {AllReducers} from './AllReducers';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'shuttle',
  storage: AsyncStorage,
  timeout: null,
};

// const reducerPersist = persistReducer(persistConfig, AllReducers);
const persistedReducer = persistReducer(persistConfig, AllReducers);

export const Store = createStore(persistedReducer, {}, applyMiddleware(logger));

export const persistedStore = persistStore(Store);
