import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { apiController } from './api-controller/api-controller';

export const createStore = () => {
    return configureStore({
        reducer: combineReducers({
            [apiController.reducerPath]: apiController.reducer
        }),
        middleware(getDefaultMiddleware) {
            return [...getDefaultMiddleware(), apiController.middleware]
        },
    });
};
