import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const loginFn = createAsyncThunk('login', (arg, { rejectWithValue }) => { })


export const loginSlice = createSlice({
    name: "login",
    initialState: {
        login: false,
        data: null,
        isLoading: false,
        arr: []
    },
    reducers: {
        update(state, action) {
            console.log('payload: ', action);
            state.arr.push(action.payload);
        }
    }
})

export const { update } = loginSlice.actions

export default loginSlice;