import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { setTokenToLoginReducer, PostLogin, setErrorLogin } from './LoginAction';
import { navigate } from '../../../Utils/Navigate';
import { ToastAndroid } from 'react-native';

function* SagaLogin(action) {
  try {
    console.log(action.payload, 'berhasil');
    const res = yield axios.post(
      {
        'method': 'POST',
        'hostname': 'final-project-shuttle.herokuapp.com',
        'path': '/user/login/',
        'headers': {
        },
        'maxRedirects': 20,
        'data': action.payload
      }
    );

    console.log(res, 'res');
    if (res.status === 200) {
      yield put(setTokenToLoginReducer(res.data));
      yield navigate('Bottom Tab');
    } else if (res.status === 400) {
      console.log(res);
      // ToastAndroid.show(
      //   'email or password are incorrect',
      //   ToastAndroid.LONG,
      //   ToastAndroid.TOP,
      // );
    }
    console.log(action.payload, 'Login from saga');
  } catch (error) {
    console.log(error, 'Bagaimana');
    yield put(setErrorLogin());
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
