import { takeLatest, put } from 'redux-saga/effects'
import { searchApi } from '../Api'
import { useDispatch } from 'react-redux'
function* searchData() {
    const dispatch = useDispatch()
    try {
        const res = yield searchApi()

        if (res && res.data) {
            yield dispatch({ type: getAllDataSearchSuccess, payload: res.data })
        } else {
            yield dispatch({ type: getAllDataSearchFailed })
        }
    } catch (e) {
        console.log(e)
    }
}


function* homeSaga() {
    yield takeLatest('getAllDataSearch', searchData)
}

export default homeSaga