import { all } from 'redux-saga/effects';
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { setLoading } from '../../../Store/globalAction';
import { baseUrl } from '../../../Utils/Config';
import { navigate } from '../../../Utils/Navigate';
import { setAllBookings, setOnGoing, setSelectedTicketData } from './BookingAction';

function* BookingSaga(action) {
    try {
        const res = yield axios.get(
            `${baseUrl}/order/e-ticket`,
            { headers: { Authorization: `bearer ${action.payload.token}` } },
        );
        yield put(setAllBookings(res.data));
    } catch (error) {
        console.log(error)
    }
}

function* fetchOnGoing(action) {
    try {
        const res = yield axios.get(
            `${baseUrl}/payment/show/status`,
            { headers: { Authorization: `bearer ${action.payload.token}` } },
        );
        yield put(setOnGoing(res.data));
    } catch (error) {
        console.log(error)
    }
}

function* fetchSelectedTicketDetail(action) {
    try {
        yield put(setLoading(true));
        const res = yield axios.get(
            `${baseUrl}/order/ticket?order_id=${action.payload.orderId}`,
            { headers: { Authorization: `bearer ${action.payload.token}` } },
        );
        yield put(setSelectedTicketData(res.data));
        yield navigate('Detail Stack', { screen: 'Ticket Details' })
    } catch (error) {
        console.log(error)
    } finally {
        yield put(setLoading(false));
    };
}

function* sagaPostReview(action) {
    try {
        yield put(setLoading(true));
        const res = yield axios.get(
            `${baseUrl}/order/review/`, action.payload,
            {
                headers: {
                    Authorization: `bearer ${action.payload.token}`,
                    'content-type': 'application/json'
                }
            },
        );
    } catch (error) {
        console.log(error)
    } finally {
        yield put(setLoading(false));
    };
}

export function* SagaBookingWorker() {
    yield takeLatest('GET_ALL_BOOKINGS', BookingSaga)
    yield takeLatest('GET_ON_GOING', fetchOnGoing)
    yield takeLatest('GET_SELECTED_TICKET_DATA', fetchSelectedTicketDetail)
    yield takeLatest('POST_REVIEW', sagaPostReview)
}