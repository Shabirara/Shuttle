import { all } from 'redux-saga/effects';
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { setLoading } from '../../../Store/globalAction';
import { baseUrl } from '../../../Utils/Config';
import { navigate } from '../../../Utils/Navigate';
import { setProfileData } from './ProfileAction';
import { select } from '@redux-saga/core/effects';
import { ToastAndroid } from 'react-native';

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

function* PatchProfileData(action) {
    try {
        yield put(setLoading(true));
        const res = yield axios.patch(
            `${baseUrl}/user/profile`,
            action.payload,
            { headers: { Authorization: `bearer ${action.payload.token}` } },
        );
        console.log(res, 'Patch Profile')
    } catch (error) {
        console.log(error)
    } finally {
        yield put(setLoading(false));
    };
}

function* PatchPasswordData(action) {
    try {
        yield put(setLoading(true));
        const res = yield axios.patch(
            `${baseUrl}/user`,
            action.payload,
            { headers: { Authorization: `bearer ${action.payload.token}` } },
        );
        console.log(res, 'Patch Password')
    } catch (error) {
        console.log(error)
    } finally {
        yield put(setLoading(false));
    };
}

function* PostProfilePictureSaga(action) {
    try {
        yield put(setLoading(true));

        const options = {
            headers: {
                Authorization: `bearer ${action.payload.token}`,
                'content-type': 'application/json'
            },
        };
        const res = yield axios.post(
            `${baseUrl}/user/updatePicture`,
            action.payload.pic,
            options,
        );

        if (res.status === 200) {
            ToastAndroid.showWithGravityAndOffset(
                'Profile Picture Updated!',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                200,
            );
        }
    } catch (error) {
        console.log(error, 'Post Profile Picture');
        ToastAndroid.showWithGravityAndOffset(
            'Sorry, update Profile Picture failed. Please try again later.',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            200,
        );
    } finally {
        yield put(setLoading(false));
    }
}

export function* SagaProfileWorker() {
    yield takeLatest('GET_PROFILE_DATA', SagaProfile)
    yield takeLatest('PATCH_PROFILE', PatchProfileData)
    yield takeLatest('PATCH_PASSWORD', PatchPasswordData)
    yield takeLatest('POST_PROFILE_PICTURE', PostProfilePictureSaga)
}