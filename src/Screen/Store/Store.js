import {createStore, applyMiddleware} from 'redux';
import {AllReducers} from './AllReducers';
import {persistReducer, persistStore} from 'redux-persist';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reduxSaga from 'redux-saga';
import {put, all} from 'redux-saga/effects';
import {setLoading} from './globalAction';
import axios from 'axios';
import {REGISTER} from 'redux-persist/es/constants';
import {allSagas} from './AllSaga';

const persistConfig = {
  key: 'shuttle',
  storage: AsyncStorage,
  timeout: null,
};

const SagaMiddleWare = reduxSaga();

const persistedReducer = persistReducer(persistConfig, AllReducers);

export const Store = createStore(
  persistedReducer,
  {},
  applyMiddleware(logger, SagaMiddleWare),
);

export const persistedStore = persistStore(Store);

SagaMiddleWare.run(allSagas);
