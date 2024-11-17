import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {

}

const userLoginRequest = createAction('USER_LOGIN_REQUEST');
const userLoginSuccess = createAction('USER_LOGIN_SUCCESS');
const userLoginFailure = createAction('USER_LOGIN_FAILURE');

const userRegisterRequest = createAction('USER_REGISTER_REQUEST');
const userRegisterSuccess = createAction('USER_REGISTER_SUCCESS');
const userRegisterFailure = createAction('USER_REGISTER_FAILURE');

const loginOtpRequest = createAction('LOGIN_OTP_REQUEST');
const loginOtpSuccess = createAction('LOGIN_OTP_SUCCESS');
const loginOtpFailure = createAction('LOGIN_OTP_FAILURE');

const verifyOtpRequest = createAction('VERIFY_OTP_REQUEST');
const verifyOtpSuccess = createAction('VERIFY_OTP_SUCCESS');
const verifyOtpFailure = createAction('VERIFY_OTP_FAILURE');

const clearError = createAction('CLEAR_ERROR');
const clearMessage = createAction('CLEAR_MESSAGE');

export const userAuthReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(userLoginRequest, (state) => {
            state.loading = true;
        })
        .addCase(userLoginSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.id = action.payload.id;
        })
        .addCase(userLoginFailure, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(loginOtpRequest, (state) => {
            state.loading = true;
        })
        .addCase(loginOtpSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload;
            // state.id = action.payload.id;
        })
        .addCase(loginOtpFailure, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(userRegisterRequest, (state) => {
            state.loading = true;
        })
        .addCase(userRegisterSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.id = action.payload.id;
        })
        .addCase(userRegisterFailure, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(verifyOtpRequest, (state) => {
            state.loading = true;
        })
        .addCase(verifyOtpSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload;
            // state.id = action.payload.id;
        })
        .addCase(verifyOtpFailure, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(clearError, (state) => {
            state.error = null;
        })
        .addCase(clearMessage, (state) => {
            state.message = null;
        })
})