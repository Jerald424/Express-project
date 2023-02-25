import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './slice/loginSlice';
import themeSlice from './slice/themeSlice';

const store = configureStore({
    reducer: {
        login: loginReducer.reducer,
        theme: themeSlice,
    }
})

export default store;