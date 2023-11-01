import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'name',
  initialState: {
    data: [],
    isLoading: false,
    error: null
  },
  reducers: {}
})

export const usersReducer = userSlice.reducer;