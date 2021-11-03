import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { setTokenToLoginReducer, PostLogin, setErrorLogin } from './LoginAction';
import { navigate } from '../../../Utils/Navigate';
import { baseUrl } from '../../../Utils/Config';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLogged } from '../../../Store/globalAction';
import { ToastAndroid } from 'react-native';

function* SagaLogin(action) {
  try {
    console.log(action.payload, 'berhasil');

    const options = {
      headers: { 'content-type': 'application/json' },
    };
    const res = yield axios.post(
      `${baseUrl}/user/login`,
      action.payload,
      options,
    );
    console.log(res, 'res');

    if (res.status === 200) {
      yield put(setTokenToLoginReducer(res.data));
      yield put(setIsLogged(true))
      yield navigate('Bottom Tab');
    }

    console.log(action.payload, 'Login from saga');
  } catch (error) {
    console.log(error, 'Error Login');
    yield put(setErrorLogin());
    ToastAndroid.showWithGravityAndOffset(
      'Email or Password is Incorrect',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      200,
    );
  }
}

export function* SagaLoginWorker() {
  yield takeLatest('POST_LOGIN', SagaLogin);
}
