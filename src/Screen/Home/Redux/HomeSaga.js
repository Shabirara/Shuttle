import {all} from 'redux-saga/effects';
import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {baseUrl} from '../../../Utils/Config';
import {navigate} from '../../../Utils/Navigate';
import {setTerminalData, setSearchResultBus} from './HomeAction';

function* SagaOneTrip() {
  console.log('OneTrip');
}

function* SagaRoundTrip() {
  console.log('RoundTrip');
}

function* fetchLocationData(action) {
  console.log(action.payload, 'coba INI');
  try {
    const res = yield axios.get(
      `${baseUrl}/search?departure_shuttle_id=${action.payload.departure_shuttle_id}&arrival_shuttle_id=${action.payload.arrival_shuttle_id}&departure_date=${action.payload.departure_date}&return_date=${action.payload.return_date}&passenger=${action.payload.passenger}&order_type=${action.payload.order_type}&time=${action.payload.time}&r_time=${action.payload.r_time}`,
    );
    yield put(setSearchResultBus(res.data.departure));
    console.log(res, 'Location Data');
    yield navigate('Detail Stack', {screen: 'Search Result'});
  } catch (error) {
    console.log(error.toJSON());
  }
}

function* fetchTerminalData(action) {
  try {
    const res = yield axios.get(`${baseUrl}/search/shuttle`);
    yield put(setTerminalData(res.data.data));
    console.log(res, 'Terminal Data');
  } catch (error) {
    console.log(error);
  }
}

export function* SagaHomeWorker() {
  yield all([SagaOneTrip(), SagaRoundTrip()]);
  yield takeLatest('GET_SEARCH_LOCATION_DATA', fetchLocationData);
  yield takeLatest('GET_TERMINAL_DATA', fetchTerminalData);
}
