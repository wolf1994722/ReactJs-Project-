import { createSlice } from "@reduxjs/toolkit";
import { deleteAllUser } from "../actions/index";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    // deleteAllUser(state, action) {
      // return []
    //   state = [];
    //   return state;
    // },
  },
  extraReducers(builder) {
    builder.addCase(deleteAllUser, (state, action) => {
      state = [];
      return state;
    });
  },
});

export default userSlice;

export const { addUser, removeUser } = userSlice.actions;
