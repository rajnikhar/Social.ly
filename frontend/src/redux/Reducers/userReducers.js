import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {

}

const userLoginRequest = createAction('USER_LOGIN_REQUEST');
const userLoginSuccess = createAction('USER_LOGIN_SUCCESS');
const userLoginFailure = createAction('USER_LOGIN_FAIL');

export const userAuthReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(userLoginRequest, (state) => {
            state.loading = true;
        })
        .addCase(userLoginSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(userLoginFailure, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
})