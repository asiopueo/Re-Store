import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isLoading: false,
        darkMode: false,
    },
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        stopLoading: (state) => {
            state.isLoading = false;
        },
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        }
    }
});

export const {startLoading, stopLoading, toggleDarkMode} = uiSlice.actions