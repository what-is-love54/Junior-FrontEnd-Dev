import { getDefaultMiddleware, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { usersSlice } from "./slices/user";

export const store = configureStore({
    reducer:usersSlice.reducer,
    middleware:[...getDefaultMiddleware(),logger]})