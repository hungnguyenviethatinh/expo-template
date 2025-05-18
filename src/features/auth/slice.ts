import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Auth } from './types';

const initialState: Auth = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    removeAuth: state => {
      state.accessToken = undefined;
    },
  },
});

export const { setAuth, removeAuth } = authSlice.actions;
export const reducer = authSlice.reducer;
