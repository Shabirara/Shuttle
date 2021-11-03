import axios from 'axios';
import {all, put, takeLatest} from 'redux-saga/effects';
import {setTokenToRegisterReducer, PostRegister} from './RegisterAction';
import {baseUrl} from '../../../Utils/Config';
import {navigate} from '../../../Utils/Navigate';
import {setIsLogged} from '../../../Store/globalAction';
import {ToastAndroid} from 'react-native';

function* SagaRegister(action) {
  try {
    console.log(action.payload, 'Register');
    const options = {
      headers: {'content-type': 'application/json'},
    };
    const res = yield axios.post(
      `${baseUrl}/user/register`,
      action.payload,
      options,
    );

    if (res.status === 200) {
      console.log(res, 'res');
      yield put(setTokenToRegisterReducer(res));
      // yield put(setIsLogged(true));
      yield navigate('Login');
    }
    // } else if (res.status === 400) {
    //   console.log(res);
    // }
  } catch (error) {
    ToastAndroid.showWithGravityAndOffset(
      'Email or Password is Incorrect, Please Input Correct Password',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      200,
    );
    console.log(error);
  }
}

export function* SagaRegisterWorker() {
  yield takeLatest('POST_REGISTER', SagaRegister);
}
