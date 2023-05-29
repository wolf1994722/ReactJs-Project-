import { createSlice } from '@reduxjs/toolkit'

const adminSlice = createSlice({
  name: "admin",
  initialState: [],
  reducers: {
    deleteAllAmin(state, action) {
      state = []
      return state
    },
  },
})

export default adminSlice

export const { deleteAllAmin } = adminSlice.actions