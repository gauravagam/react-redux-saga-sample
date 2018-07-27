import { takeEvery, call, put } from 'redux-saga/effects'
import {productListSuccess, productListFailed} from '../redux/action/homePageActions';
import {GET_PRODUCT_LIST_REQUEST} from '../redux/action/actionConstants';
import {getProductListApi} from '../api/api' 

export function* callGetProductList(){
    try{
        let response=yield call(getProductListApi);
        console.log('inside saga response ',response);
        
        if(!response.error){
            yield put(productListSuccess(response.productList))
        }else{
            yield put(productListFailed(response.message))
        }
    }catch(e){
        yield put(productListFailed(e.message))
    }
}

export function* watchGetProductList(){    
    yield takeEvery(GET_PRODUCT_LIST_REQUEST,callGetProductList);
}
