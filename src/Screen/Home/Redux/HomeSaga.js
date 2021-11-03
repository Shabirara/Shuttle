import { all } from 'redux-saga/effects';
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { setLoading } from '../../../Store/globalAction';
import { baseUrl } from '../../../Utils/Config';
import { navigate } from '../../../Utils/Navigate';
import {
  setTerminalData,
  setSearchResultBus,
  setSearchResultReturn,
  setBusDetailsData,
  setBusReviewData,
  setSeatData,
  setOrderId,
  setPaymentData,
  setOrderDetail,
  setTicketDetail,
} from './HomeAction';

function* SagaOneTrip() {
  console.log('OneTrip');
}

function* SagaRoundTrip() {
  console.log('RoundTrip');
}

function* fetchLocationData(action) {
  console.log(action.payload, 'coba INI');
  try {
    yield put(setLoading(true));
    console.log(
      `${baseUrl}/search?departure_shuttle_id=${action.payload.departure_shuttle_id}&arrival_shuttle_id=${action.payload.arrival_shuttle_id}&departure_date=${action.payload.departure_date}&return_date=${action.payload.return_date}&passenger=${action.payload.passenger}&order_type=${action.payload.order_type}&time=${action.payload.time}&r_time=${action.payload.r_time}`,
    );
    const res = yield axios.get(
      `${baseUrl}/search?departure_shuttle_id=${action.payload.departure_shuttle_id}&arrival_shuttle_id=${action.payload.arrival_shuttle_id}&departure_date=${action.payload.departure_date}&return_date=${action.payload.return_date}&passenger=${action.payload.passenger}&order_type=${action.payload.order_type}&time=${action.payload.time}&r_time=${action.payload.r_time}`,
    );
    yield put(setSearchResultBus(res.data.departure));
    yield put(setSearchResultReturn(res.data.return));
    console.log(res, 'Location Data');
    yield navigate('Detail Stack', { screen: 'Search Result' });
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setLoading(false));
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
  console.log(action.payload.id, 'bus data');
  try {
    const res = yield axios.get(
      `${baseUrl}/search/bus?id=${action.payload.id}`,
    );
    yield put(setBusDetailsData(res.data.data));
    console.log(res, 'Bus Details');
    console.log(res.data.data, 'Bus Details Data');
    yield navigate('Detail Stack', { screen: 'Bus Details' });
  } catch (err) {
    console.log(err);
  }
}

function* fetchBusReviewData(action) {
  try {
    const res = yield axios.get(
      `${baseUrl}/review/?bus_schedule_id=${action.payload}`,
    );
    yield put(setBusReviewData(res.data));
    console.log(res.data, 'Bus Review');
  } catch (err) {
    console.log(err);
  }
}

function* fetchSeatData(action) {
  try {
    const res = yield axios.get(
      `${baseUrl}/order/?date=${action.payload.date}&bus_schedule_id=${action.payload.bus_schedule_id}`,
      { headers: { Authorization: `bearer ${action.payload.token}` } },
    );
    yield put(setSeatData(res.data.data));
    console.log(res.data.data, 'Seat Data');
    yield navigate('Detail Stack', { screen: 'Select Seat' });
  } catch (err) {
    console.log(err);
    console.log(action.payload.token);
  }
}


function* postOrderData(action) {
  try {
    const res = yield axios.post(`${baseUrl}/order`, action.payload, { headers: { Authorization: `bearer ${action.payload.token}` } })
    yield put(setOrderId(res.data))
    yield navigate('Detail Stack', { screen: 'Payment Method' })
  } catch (error) {
    console.log(error)
  }
}

function* fetchOrderDetail(action) {
  try {
    const res = yield axios.get(
      `${baseUrl}/order/detail?order_id=${action.payload.orderId}`,
      { headers: { Authorization: `bearer ${action.payload.token}` } },
    );
    yield put(setOrderDetail(res.data.data));
  } catch (error) {
    console.log(error)
  }
}

function* fetchPaymentData(action) {
  try {
    const res = yield axios.get(
      `${baseUrl}/payment/?order_id=${action.payload.orderId}`,
      { headers: { Authorization: `bearer ${action.payload.token}` } },
    );
    yield put(setPaymentData(res.data));
  } catch (error) {
    console.log(error)
  }
}

function* fetchTicketDetail(action) {
  try {
    const res = yield axios.get(
      `${baseUrl}/order/ticket?order_id=${action.payload.orderId}`,
      { headers: { Authorization: `bearer ${action.payload.token}` } },
    );
    yield put(setTicketDetail(res.data));
    yield navigate('Detail Stack', { screen: 'Booking Details' })
  } catch (error) {
    console.log(error)
  }
}

export function* SagaHomeWorker() {
  yield takeLatest('GET_SEARCH_LOCATION_DATA', fetchLocationData);
  yield takeLatest('GET_TERMINAL_DATA', fetchTerminalData);
  yield takeLatest('GET_BUS_DETAILS_DATA', fetchBusDetailsData);
  yield takeLatest('GET_BUS_REVIEW_DATA', fetchBusReviewData);
  yield takeLatest('GET_SEAT_DATA', fetchSeatData);
  yield takeLatest('POST_ORDER', postOrderData);
  yield takeLatest('GET_ORDER_DETAIL', fetchOrderDetail)
  yield takeLatest('GET_PAYMENT_DATA', fetchPaymentData)
  yield takeLatest('GET_TICKET_DETAIL', fetchTicketDetail)
}
