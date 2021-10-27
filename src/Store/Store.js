import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ReduxSaga from 'redux-saga'
import logger from 'redux-logger'

import { allReducers } from './allReducers'
import { allSagas } from './allSagas'

const persistConfig = {
    key: 'reactnativeshuttle',
    storage: AsyncStorage,
    timeout: null
}

const persistedReducer = persistReducer(persistConfig, allReducers)
const SagaMiddleWare = ReduxSaga()

export const Store = createStore(persistedReducer, {}, applyMiddleware(logger, SagaMiddleWare))

export const Persistor = persistStore(Store)

SagaMiddleWare.run(allSagas)