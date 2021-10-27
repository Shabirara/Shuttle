import {all} from 'redux-saga/effects';

function* SagaOneTrip() {
  console.log('OneTrip');
}

function* SagaRoundTrip() {
  console.log('RoundTrip');
}

export function* SagaHomeWorker() {
  yield all([SagaOneTrip(), SagaRoundTrip()]);
}
