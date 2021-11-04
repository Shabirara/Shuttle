import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { setTokenToLoginReducer, PostLogin, setErrorLogin } from './LoginAction';
import { navigate } from '../../../Utils/Navigate';
import { baseUrl } from '../../../Utils/Config';
import { useDispatch, useSelector } from 'react-redux';
import { setGoogleLogged, setIsLogged, setLoading } from '../../../Store/globalAction';
import { ToastAndroid } from 'react-native';

function* SagaLogin(action) {
  try {
    yield put(setLoading(true));

    const options = {
      headers: { 'content-type': 'application/json' },
    };
    const res = yield axios.post(
      `${baseUrl}/user/login`,
      action.payload,
      options,
    );

    if (res.status === 200) {
      yield put(setTokenToLoginReducer(res.data));
      yield put(setIsLogged(true))
    }
  } catch (error) {
    console.log(error, 'Error Login');
    yield put(setErrorLogin());
    ToastAndroid.showWithGravityAndOffset(
      'Email or Password is incorrect',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      200,
    );
  } finally {
    yield put(setLoading(false));
  }
}

function* SagaLoginGoogle(action) {
  try {
    yield put(setLoading(true));

    const options = {
      headers: { 'content-type': 'application/json' },
    };
    const res = yield axios.post(
      `${baseUrl}/user/auth`,
      {},
      {
        params: {
          token: action.payload
        }
      }
    );

    if (res.status === 200) {
      yield put(setTokenToLoginReducer(res.data));
      yield put(setIsLogged(true))
      yield put(setGoogleLogged(true))
    }

    console.log(action.payload, 'Login Google');
  } catch (error) {
    console.log(error, 'Error Login Google');
    yield put(setErrorLogin());
    ToastAndroid.showWithGravityAndOffset(
      'Login with Google failed',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      200,
    );
  } finally {
    yield put(setLoading(false));
  }
}

export function* SagaLoginWorker() {
  yield takeLatest('POST_LOGIN', SagaLogin);
  yield takeLatest('POST_LOGIN_GOOGLE', SagaLoginGoogle)
}
