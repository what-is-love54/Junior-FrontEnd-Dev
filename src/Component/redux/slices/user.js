import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    fetching: true
  },
  reducers: {
    setUser(state, action) {
      state.users = action.payload
    },
    setFetching(state, action) {
      state.fetching = action.payload
    }
  }
})
