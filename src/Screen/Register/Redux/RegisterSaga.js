import axios from 'axios';
import { all, put, takeLatest } from 'redux-saga/effects';
import { setTokenToRegisterReducer } from './RegisterAction';

function* SagaRegister(action) {
  try {
    const res = yield axios.post(
      'https://final-project-shuttle.herokuapp.com/user/register',
      action.payload,
    );
    yield put(setTokenToRegisterReducer(res.data));
    console.log('Register from saga');
  } catch (error) {
    console.log(error)
  }
}

export function* SagaRegisterWorker() {
  yield takeLatest('POST_REGISTER', SagaRegister);
}
