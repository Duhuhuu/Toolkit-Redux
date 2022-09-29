import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,

    },
    reducers: {
    increment: (state, /* action */ ) => {
    state.counter += 1;
    },
  }
});


// Action creators are generated for each case reducer function
export const { increment } = pokemonSlice.actions;