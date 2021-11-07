import { all } from 'redux-saga/effects';
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { setLoading } from '../../../Store/globalAction';
import { baseUrl } from '../../../Utils/Config';
import { navigate } from '../../../Utils/Navigate';
import { setAllBookings, setOnGoing, setReviewId, setSelectedTicketData } from './BookingAction';
import { ToastAndroid } from 'react-native';

function* BookingSaga(action) {
    try {
        const res = yield axios.get(
            `${baseUrl}/order/e-ticket`,
            { headers: { Authorization: `bearer ${action.payload.token}` } },
        );
        if (res.status === 200) {
            yield put(setAllBookings(res.data));
        }
    } catch (error) {
        yield put(setAllBookings({}))
        console.log(error)
    }
}

function* fetchOnGoing(action) {
    try {
        const res = yield axios.get(
            `${baseUrl}/payment/show/status`,
            { headers: { Authorization: `bearer ${action.payload.token}` } },
        );
        if (res.status === 200) {
            yield put(setOnGoing(res.data));
        }
    } catch (error) {
        yield put(setOnGoing({}))
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
        if (res.status === 200) {
            yield put(setSelectedTicketData(res.data));
            yield navigate('Detail Stack', { screen: 'Ticket Details' })
        }
    } catch (error) {
        yield put(setSelectedTicketData({}))
        console.log(error)
    } finally {
        yield put(setLoading(false));
    };
}

function* fetchReviewId(action) {
    try {
        yield put(setLoading(true));
        const res = yield axios.get(
            `${baseUrl}/order/review/?order_detail_id=${action.payload.orderDetailId}`,
            { headers: { Authorization: `bearer ${action.payload.token}` } },
        );
        yield put(setReviewId(res.data));
    } catch (error) {
        console.log(error)
    } finally {
        yield put(setLoading(false));
    };
}

function* sagaPostReview(action) {
    try {
        yield put(setLoading(true));
        const res = yield axios.post(
            `${baseUrl}/review/`, {
            "order_id": action.payload.order_id,
            "order_detail_id": action.payload.order_detail_id,
            "rating": action.payload.rating,
            "review": action.payload.review
        },
            {
                headers: {
                    Authorization: `bearer ${action.payload.token}`,
                    'content-type': 'application/json'
                }
            },
        );
        if (res.status === 200) {
            ToastAndroid.showWithGravityAndOffset(
                'Thank you for your review!',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                200,
            );
            fetchSelectedTicketDetail
        }
    } catch (error) {
        ToastAndroid.showWithGravityAndOffset(
            'Sorry, review failed. Please try again later.',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            200,
        );
        console.log(error)
    } finally {
        yield put(setLoading(false));
    };
}

export function* SagaBookingWorker() {
    yield takeLatest('GET_ALL_BOOKINGS', BookingSaga)
    yield takeLatest('GET_ON_GOING', fetchOnGoing)
    yield takeLatest('GET_SELECTED_TICKET_DATA', fetchSelectedTicketDetail)
    yield takeLatest('GET_REVIEW_ID', fetchReviewId)
    yield takeLatest('POST_REVIEW', sagaPostReview)
}