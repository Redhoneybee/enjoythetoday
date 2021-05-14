import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./Users";

const reducers = combineReducers({
    user: userSlice.reducer
});

export default reducers;
