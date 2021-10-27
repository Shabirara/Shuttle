import {all} from 'redux-saga/effects';
import {SagaHomeWorker} from '../Home/Redux/HomeSaga';
import {SagaLoginWorker} from '../Login/Redux/LoginSaga';

export function* allSagas() {
  yield all([SagaLoginWorker()]);
}
