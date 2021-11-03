import { all } from 'redux-saga/effects';
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { setLoading } from '../../../Store/globalAction';
import { baseUrl } from '../../../Utils/Config';
import { navigate } from '../../../Utils/Navigate';
import { setAllBookings } from './BookingAction';

function* BookingSaga(action) {
    try {
        yield put(setLoading(true));
        const res = yield axios.get(
            `${baseUrl}/order/e-ticket`,
            { headers: { Authorization: `bearer ${action.payload.token}` } },
        );
        yield put(setAllBookings(res.data));
    } catch (error) {
        console.log(error)
    } finally {
        yield put(setLoading(false));
    };
}

export function* SagaBookingWorker() {
    yield takeLatest('GET_ALL_BOOKINGS', BookingSaga)
}