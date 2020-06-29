import { createSlice } from '@reduxjs/toolkit'

export const planetSlice = createSlice({
  name: 'planet',
  initialState: {
    planets: [],
    planet: {},
    fetching: true
  },
  reducers: {
    setPlanets(state, action) {
      state.planets = action.payload
    },
    setFetching(state, action) {
      state.fetching = action.payload
    },
    setPlanet(state, action) {
      state.planet = action.payload
    }
  }
})