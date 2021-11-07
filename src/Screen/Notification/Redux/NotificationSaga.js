import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import { setLoading } from "../../../Store/globalAction";
import { baseUrl } from "../../../Utils/Config";
import { setAllNotifications } from "./NotificationAction";


function* getAllNotificationsData(action) {
    try {
        yield put(setLoading(true));
        const res = yield axios.get(
            `${baseUrl}/notification`,
            { headers: { Authorization: `bearer ${action.payload.token}` } },
        );
        if (res.status === 200) {
            yield put(setAllNotifications(res));
        }
    } catch (error) {
        yield put(setAllNotifications({}))
        console.log(error)
    } finally {
        yield put(setLoading(false));
    };
}

export function* SagaNotificationWorker() {
    yield takeLatest('GET_ALL_NOTIFICATIONS', getAllNotificationsData)
}