import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from 'service/axiosnInstance'


export const loginFn = createAsyncThunk('login', async (arg, { fulfillWithValue }) => {
    const data = axiosInstance.post(arg?.method, arg?.data)
    return data

})


export const loginSlice = createSlice({
    name: "login",
    initialState: {
        login: false,
        data: null,
        isLoading: false,
        arr: [],
        isError: false,
    },
    extraReducers: {
        [loginFn.pending]: (state) => {
            state.isLoading = true
        },
        [loginFn.fulfilled]: (state, { payload }) => {
            state.data = payload;
            state.isLoading = false;
            state.isError = false;
            state.login = true;
            function setToken() {
                localStorage.setItem('token', payload.token)
            }
            Boolean(payload.token) && setToken();
        },
        [loginFn.rejected]: (state, { error }) => {
            state.isLoading = false;
            state.isError = error?.message
            alert(error?.message)
        }
    }
})

export const { update } = loginSlice.actions

export default loginSlice;