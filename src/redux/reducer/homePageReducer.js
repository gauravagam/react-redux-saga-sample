import {GET_PRODUCT_LIST_REQUEST,GET_PRODUCT_LIST_RESPONSE_SUCCESS, GET_PRODUCT_LIST_RESPONSE_FAILED} from '../action/actionConstants';

const homePageReducer=(state={},action)=>{
    switch(action.type){
        case GET_PRODUCT_LIST_REQUEST:
            console.log('inside request reducer');
            return {...state,productLoading:true}
        case GET_PRODUCT_LIST_RESPONSE_SUCCESS:
            return {...state,productList:action.payload}
        case GET_PRODUCT_LIST_RESPONSE_FAILED:
            return {...state,errorMessage:action.payload}
        default:
            return state;
    }
}

export default homePageReducer;