import { all } from 'redux-saga/effects'
import homeSaga from './searchSaga'

export default function* rootSaga() {
    yield all([
        homeSaga()
    ])
}