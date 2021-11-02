import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { setTokenToLoginReducer, PostLogin, setErrorLogin } from './LoginAction';
import { navigate } from '../../../Utils/Navigate';
import { baseUrl } from '../../../Utils/Config'
import { useDispatch, useSelector } from 'react-redux';
import { setIsLogged } from '../../../Store/globalAction';



function* SagaLogin(action) {
  try {
    console.log(action.payload, 'berhasil');

    const options = {
      headers: { 'content-type': 'application/json' }
    }
    const res = yield axios.post(`${baseUrl}/user/login`, action.payload, options);
    console.log(res, 'res');

    if (res.status === 200) {
      yield put(setTokenToLoginReducer(res.data));
      yield put(setIsLogged(true))
      navigate.params ? yield navigate(navigate.params) : yield navigate('Bottom Tab')
    } else if (res.status === 400) {
      console.log(res);
    }

    console.log(action.payload, 'Login from saga');

  } catch (error) {
    console.log(error, 'Error Login');
    yield put(setErrorLogin());
  }
}

export function* SagaLoginWorker() {
  yield takeLatest('POST_LOGIN', SagaLogin);
}
