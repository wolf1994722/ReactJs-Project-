import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload)
    },
    removeUser(state, action) {
      state.pop()
    },
    deleteAllUser(state, action) {
      state = []
    },
  },
})

export default userSlice

export const { addUser, removeUser, deleteAllUser } = userSlice.actions