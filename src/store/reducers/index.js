import RootReducer from "./reducer1";
import UserReducer from "./userReducer";
import { combineReducers } from "@reduxjs/toolkit";

const allReducers = combineReducers({
    reducer1: RootReducer,
    userReducer: UserReducer
})

export default allReducers;