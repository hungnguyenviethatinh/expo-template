import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StaffSettings, StaffSettingsStore } from './types';

const initialState: StaffSettingsStore = {};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setStaffSettings: (state, action: PayloadAction<StaffSettings>) => {
      state[action.payload.staffId] = action.payload;
    },
  },
});

export const { setStaffSettings } = settingsSlice.actions;
export const reducer = settingsSlice.reducer;
