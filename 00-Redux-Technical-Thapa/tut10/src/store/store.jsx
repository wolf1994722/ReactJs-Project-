import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './slices/index'

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
})

export default store