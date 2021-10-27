import axios from 'axios';
import {all, put, takeLatest} from 'redux-saga/effects';
import {setTokenToLoginReducer} from './LoginAction';

function* SagaLogin(action) {
  try {
    const res = yield axios.post(
      'https://final-project-shuttle.herokuapp.com/user/login/',
      action.payload,
    );

    yield put(setTokenToLoginReducer(res.data));
    console.log('Login from saga');
  } catch (error) {
    console.log(error);
  }
}

// function* SagaForgotPassword() {
//   try {
//     // const res = yield axios.post('url', {body});
//     // yield put(namaAction(res.data.access_token));
//   } catch (error) {
//     console.log(error);
//   }
// }

export function* SagaLoginWorker() {
  yield takeLatest('POST_LOGIN', SagaLogin);
}
