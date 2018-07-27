import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from '../reducer/rootReducer';
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from '../../saga/rootSaga'

const sagaMiddleware=createSagaMiddleware();
const componseEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store=createStore(
    rootReducer,
    {},
    componseEnhancers(applyMiddleware(sagaMiddleware))
)


sagaMiddleware.run(rootSaga)

export default store;