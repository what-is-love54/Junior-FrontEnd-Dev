import { createSlice } from '@reduxjs/toolkit'

export const peopleSlice = createSlice({
  name: 'people',
  initialState: {
    people: [],
    human: null,
    home: null,
    fetching: true
  },
  reducers: {
    setPeople(state, action) {
      state.people = action.payload
    },
    setHuman(state, action) {
      state.human = action.payload
    },
    setFetching(state, action) {
      state.fetching = action.payload
    },
    setHome(state, action) {
      state.home = action.payload
    }
  }
})