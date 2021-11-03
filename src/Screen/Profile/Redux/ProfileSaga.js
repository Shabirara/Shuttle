import { all } from 'redux-saga/effects';
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { setLoading } from '../../../Store/globalAction';
import { baseUrl } from '../../../Utils/Config';
import { navigate } from '../../../Utils/Navigate';
import { setProfileData } from './ProfileAction';

function* SagaProfile(action) {
    try {
        yield put(setLoading(true));
        const res = yield axios.get(
            `${baseUrl}/user`,
            { headers: { Authorization: `bearer ${action.payload.token}` } },
        );
        yield put(setProfileData(res.data.data));
    } catch (error) {
        console.log(error)
    } finally {
        yield put(setLoading(false));
    };
}

export function* SagaProfileWorker() {
    yield takeLatest('GET_PROFILE_DATA', SagaProfile)
}