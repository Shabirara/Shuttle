import { all } from 'redux-saga/effects';
import { SagaHomeWorker } from '../Screen/Home/Redux/HomeSaga';
import { SagaLoginWorker } from '../Screen/Login/Redux/LoginSaga';
import { SagaRegisterWorker } from '../Screen/Register/Redux/RegisterSaga';

export function* allSagas() {
  yield all([SagaHomeWorker(), SagaLoginWorker(), SagaRegisterWorker()]);
}
