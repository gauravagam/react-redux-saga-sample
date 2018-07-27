import { takeEvery, call, put } from 'redux-saga/effects'
import {
    authenticationResponseSuccess,
    authenticationResponseFailed
} from '../redux/action/loginActions';
import { AUTHENTICATION_REQUEST } from '../redux/action/actionConstants'
import { loginApi } from '../api/api';


export function* callAuthenticationRequest(action) {
    try {
        let response = yield call(loginApi, action.payload);
        if (!response.error) {
            yield put(authenticationResponseSuccess(response.user))
        } else {
            yield put(authenticationResponseFailed(response.message))
        }
    } catch (e) {
        yield put(authenticationResponseFailed(e.message))
    }

}
export function* watchAuthenticationRequest(action) {
    yield takeEvery(AUTHENTICATION_REQUEST, callAuthenticationRequest);
}

