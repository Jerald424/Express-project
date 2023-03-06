import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from 'service/axiosnInstance'


export const loginFn = createAsyncThunk('login', async (arg, { fulfillWithValue }) => {
    const data = axiosInstance.post(arg?.method, arg?.data)
    return data

})

export const isVerify = createAsyncThunk('isVerify', async (arg, { }) => {
    const data = axiosInstance.get('/is-verify', {
        headers: {
            'token': arg
        }
    })
    return data
})

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        login: false,
        data: null,
        isLoading: false,
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
        },
        [isVerify.pending]: (state) => {
            state.isLoading = true
        },
        [isVerify.fulfilled]: (state, { payload }) => {
            state.data = payload;
            state.isLoading = false;
            state.isError = false;
            state.login = true;
        },
        [isVerify.rejected]: (state, { error }) => {
            state.isLoading = false;
            state.isError = error?.message;
            state.login = false
            alert(error?.message)
        }
    }
})

// export const { isVerify } = loginSlice.actions

export default loginSlice;