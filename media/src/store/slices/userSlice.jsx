import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'name',
  initialState: {
    data: []
  },
  reducers: {}
})

export const usersReducer = userSlice.reducer;