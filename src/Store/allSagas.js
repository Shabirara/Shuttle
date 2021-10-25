import { all } from 'redux-saga/effects'

function* IAmSaga() {
    console.log('Saga is running')
}

function* Login() {
    console.log('Login is running')
}

export function* allSagas() {
    yield all([IAmSaga(), Login()])
}

