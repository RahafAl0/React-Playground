import { configureStore, createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1)
    },
    reset(state, action) {
      return [];
    }
  }
})

const songSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload)
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  },
  extraReducers(builder) {
    builder.addCase(movieSlice.actions.reset.toString(), (state, action) => {
      return [];
    })
  }
});

const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
    movies: movieSlice.reducer
  }
});


export { store, songSlice, movieSlice}
export const { addSong, removeSong } = songSlice.actions;
export const { addMovie, removeMovie, reset } = movieSlice.actions