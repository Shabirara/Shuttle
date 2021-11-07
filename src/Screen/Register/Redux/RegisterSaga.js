import axios from 'axios';
import { all, put, takeLatest } from 'redux-saga/effects';
import { setTokenToRegisterReducer, PostRegister } from './RegisterAction';
import { baseUrl } from '../../../Utils/Config';
import { navigate } from '../../../Utils/Navigate';
import { setIsLogged, setLoading } from '../../../Store/globalAction';
import { ToastAndroid } from 'react-native';
import { setTokenToLoginReducer } from '../../Login/Redux/LoginAction';

function* SagaRegister(action) {
  try {
    setLoading(true)
    console.log(action.payload, 'Register');
    const options = {
      headers: { 'content-type': 'application/json' },
    };
    const res = yield axios.post(
      `${baseUrl}/user/register`,
      action.payload,
      options,
    );

    if (res.status === 200) {
      ToastAndroid.showWithGravityAndOffset(
        'Register success! Welcome to Shuttle.',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        200,
      );
      yield put(setTokenToLoginReducer(res.data.token));
      yield put(setIsLogged(true));
      yield navigate('Bottom Tab');
    } else if (res.status === 400) {
      ToastAndroid.showWithGravityAndOffset(
        'Register error. Try signing in with Google?',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        200,
      );
    }
  } catch (error) {
    ToastAndroid.showWithGravityAndOffset(
      'Register error. Try signing in with Google?',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      200,
    );
    console.log(error);
  } finally {
    setLoading(true)
  }
}

export function* SagaRegisterWorker() {
  yield takeLatest('POST_REGISTER', SagaRegister);
}
