import {configureStore} from "@reduxjs/toolkit";
import tasks  from "./slices/task.slice";


export default configureStore({
    reducer:{
        tasks,
    }
});