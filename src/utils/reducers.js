import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice(
    {
        name: "app",
        initialState: {
            sideBarClosed: true
        },
        reducers: {
            toggleSideBar: (state) => {
                state.sideBarClosed = !state.sideBarClosed;
            }
        }

    }
);
export const { toggleSideBar } = appSlice.actions;
export default appSlice.reducer;

