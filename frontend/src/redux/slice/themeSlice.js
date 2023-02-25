import { createSlice } from '@reduxjs/toolkit'
import { light, dark } from 'utils'

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isDark: false,
        colors: light
    },
    reducers: {
        changeTheme(state) {
            state.colors = state.isDark ? light : dark;
            state.isDark = !state.isDark;
        }
    }
})

export const { } = themeSlice.actions;
export default themeSlice.reducer;