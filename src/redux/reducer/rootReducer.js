import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import homePageReducer from './homePageReducer';
 
export default combineReducers({
    loginReducer,
    homePageReducer
})