import {AUTHENTICATION_REQUEST,
    AUTHENTICATION_RESPONSE_SUCCESS,
    AUTHENTICATION_RESPONSE_FAILED,
    CLEAR_LOGIN_ERROR} from "./actionConstants"

export const authenticationRequest =(loginInfo)=>({
    type:AUTHENTICATION_REQUEST,
    payload:loginInfo
})

export const authenticationResponseSuccess=(response)=>({
    type:AUTHENTICATION_RESPONSE_SUCCESS,
    payload:response
})

export const authenticationResponseFailed=(error)=>({
    type:AUTHENTICATION_RESPONSE_FAILED,
    payload:error
})

export const clearLoginError=()=>({
    type:CLEAR_LOGIN_ERROR,
    payload:''
})