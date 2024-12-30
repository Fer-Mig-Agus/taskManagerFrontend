import { createSlice } from "@reduxjs/toolkit";
const { VITE_URL_API } = import.meta.env;


export const tasksSlice = createSlice({
    name: "tasks",
    initialState:[],
    reducers: {
        getAllTasks: (state,action) => {
            return action.payload
        },
    }
});

export const { getAllTasks } = tasksSlice.actions;

export default tasksSlice.reducer;