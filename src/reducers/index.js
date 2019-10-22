import { combineReducers } from 'redux';

import UserReducer from './UserReducer';
import RegisterReducer from './RegisterReducer';
import LoadingReducer from './LoadingReducer';
import LoginReducer from './LoginReducer';
import AlertReducer from './AlertReducer';
import RxsenseReducer from './RxsenseReducer';


export default combineReducers({
    UserReducer,
    RegisterReducer,
    LoadingReducer,
    LoginReducer,
    AlertReducer,
    RxsenseReducer
});
