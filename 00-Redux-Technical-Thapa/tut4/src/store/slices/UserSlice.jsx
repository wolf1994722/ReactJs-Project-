import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) { },
    removeUser(state, action) { },
    deleteAllUser(state, action) { },
  },
})

console.log(userSlice.reducer)

export default userSlice