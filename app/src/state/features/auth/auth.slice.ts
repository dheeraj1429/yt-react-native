import { createSlice } from '@reduxjs/toolkit';
import { InitialStateInterface } from '.';

const INITIALSTATE: InitialStateInterface = {
   auth: null,
};

export const authSlice = createSlice({
   name: 'authSlice',
   initialState: INITIALSTATE,
   reducers: {
      setLogin: (state, action) => {
         state.auth = action.payload;
      },
   },
});

export const { setLogin } = authSlice.actions;
