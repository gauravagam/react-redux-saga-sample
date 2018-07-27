import {GET_PRODUCT_LIST_REQUEST,
    GET_PRODUCT_LIST_RESPONSE_SUCCESS,
    GET_PRODUCT_LIST_RESPONSE_FAILED} from './actionConstants';

export const getProductList=()=>({
    type:GET_PRODUCT_LIST_REQUEST,
    payload:[]
})

export const productListSuccess=(productList)=>({
    type:GET_PRODUCT_LIST_RESPONSE_SUCCESS,
    payload:productList
})

export const productListFailed=(errorMessage)=>({
        type:GET_PRODUCT_LIST_RESPONSE_FAILED,
        payload:errorMessage
})