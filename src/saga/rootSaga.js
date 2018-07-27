import {all,fork } from 'redux-saga/effects'
import {watchAuthenticationRequest} from './loginSaga';
import {watchGetProductList} from './homePageSaga';

export function* rootSaga() {
    yield all([
        fork(watchAuthenticationRequest),
        fork(watchGetProductList)
    ])
}
