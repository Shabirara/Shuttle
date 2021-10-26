import { all } from 'redux-saga/effects'
import { SagaHomeWorker } from '../Screen/Home/Redux/HomeSaga'

export function* allSagas() {
    yield all([SagaHomeWorker()])
}