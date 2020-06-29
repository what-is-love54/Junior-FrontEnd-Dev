import { createSlice } from '@reduxjs/toolkit'

export const shipsSlice = createSlice({
  name: 'shipsS',
  initialState: {
    ships: [],
    ship: null,
    fetching: true
  },
  reducers: {
    setShips(state, action) {
      state.ships = action.payload
    },
    setFetching(state, action) {
      state.fetching = action.payload
    },
    setShip(state, action) {
      state.ship = action.payload
    }
  }
})