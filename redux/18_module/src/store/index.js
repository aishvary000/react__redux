import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counter';
import authReducer from './auth'

const store = configureStore({
    reducer:{
        counter:counterReducer,
        auth:authReducer
    }
});
//to pass multiple slices we uses configure store
export default store;
