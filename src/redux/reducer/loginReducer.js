import {AUTHENTICATION_REQUEST,
    AUTHENTICATION_RESPONSE_SUCCESS, 
    AUTHENTICATION_RESPONSE_FAILED,
    CLEAR_LOGIN_ERROR} from '../action/actionConstants';

const initialState={
    isAuthenticating:false
}
const loginReducer=(state=initialState,action)=>{
    switch(action.type){
        case AUTHENTICATION_REQUEST:
            return {...state,isAuthenticating:true}
        case AUTHENTICATION_RESPONSE_SUCCESS:
            return {...state,isAuthenticating:false,user:action.payload}
        case AUTHENTICATION_RESPONSE_FAILED:
            return {...state,isAuthenticating:false,loggingError:action.payload}
        case CLEAR_LOGIN_ERROR:
            return {...state,loggingError:""}
        default:
            return state;
    }
}

export default loginReducer;