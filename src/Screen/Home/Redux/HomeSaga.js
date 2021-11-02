import { all } from 'redux-saga/effects';
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { baseUrl } from '../../../Utils/Config';
import { navigate } from '../../../Utils/Navigate';
import { setTerminalData, setSearchResultBus, setSearchResultReturn, setBusDetailsData, setBusReviewData, setSeatData } from './HomeAction';

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
    yield put(setSearchResultReturn(res.data.return));
    console.log(res, 'Location Data');
    yield navigate('Detail Stack', { screen: 'Search Result' });
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

function* fetchBusDetailsData(action) {
  console.log(action.payload.id, 'bus data')
  try {
    const res = yield axios.get(`${baseUrl}/search/bus?id=${action.payload.id}`)
    yield put(setBusDetailsData(res.data.data));
    console.log(res, 'Bus Details');
    console.log(res.data.data, 'Bus Details Data');
    yield navigate('Detail Stack', { screen: 'Bus Details' });
  } catch (err) {
    console.log(err)
  }
}

function* fetchBusReviewData(action) {
  try {
    const res = yield axios.get(`${baseUrl}/review/?bus_schedule_id=${action.payload}`)
    yield put(setBusReviewData(res.data))
    console.log(res.data, 'Bus Review')
  } catch (err) {
    console.log(err)
  }
}

function* fetchSeatData(action) {
  try {
    const res = yield axios.get(`${baseUrl}/order/?date=${action.payload.date}&bus_schedule_id=${action.payload.bus_schedule_id}`, { headers: { 'Authorization': `bearer ${action.payload.token}` } })
    yield put(setSeatData(res.data.data))
    console.log(res.data.data, 'Seat Data')
    yield navigate('Detail Stack', { screen: 'Select Seat' })
  } catch (err) {
    console.log(err)
    console.log(action.payload.token)
  }
}

export function* SagaHomeWorker() {
  yield all([SagaOneTrip(), SagaRoundTrip()]);
  yield takeLatest('GET_SEARCH_LOCATION_DATA', fetchLocationData);
  yield takeLatest('GET_TERMINAL_DATA', fetchTerminalData);
  yield takeLatest('GET_BUS_DETAILS_DATA', fetchBusDetailsData);
  yield takeLatest('GET_BUS_REVIEW_DATA', fetchBusReviewData);
  yield takeLatest('GET_SEAT_DATA', fetchSeatData)
}
