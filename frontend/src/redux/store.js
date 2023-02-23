import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './slice/loginSlice'

const store = configureStore({
    reducer: {
        login: loginReducer.reducer,
        logout: loginReducer.reducer
    }
})

export default store;