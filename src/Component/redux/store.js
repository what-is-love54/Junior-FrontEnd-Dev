import { getDefaultMiddleware, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { peopleSlice } from "./slices/people";
import { planetSlice } from "./slices/planets";
import { shipsSlice } from "./slices/ships";

const reducer = {
    people: peopleSlice.reducer,
    planet: planetSlice.reducer,
    shipsS: shipsSlice.reducer
}

export const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), logger]
})