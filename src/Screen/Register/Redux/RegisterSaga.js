import axios from 'axios';
import { all, put, takeLatest } from 'redux-saga/effects';
import { setTokenToRegisterReducer } from './RegisterAction';
import { baseUrl } from '../../../Utils/Config';
import { navigate } from '../../../Utils/Navigate';

function* SagaRegister(action) {
  try {
    console.log(action.payload, 'Register');
    const options = {
      headers: { 'content-type': 'application/json' }
    }
    const res = yield axios.post(`${baseUrl}/user/register`, action.payload, options);

    console.log(res, 'res');
    if (res.status === 200) {
      yield put(setTokenToRegisterReducer(res.data));
      yield navigate('Bottom Tab');
    } else if (res.status === 400) {
      console.log(res);
    }
  } catch (error) {
    console.log(error)
  }
}

export function* SagaRegisterWorker() {
  yield takeLatest('POST_REGISTER', SagaRegister);
}
