import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { colors, typography } from '@/theme';
import { ThemeMode } from '@/theme/types';
import { Theme } from './types';

const darkTheme: Theme = {
  isDarkTheme: true,
  typography,
  colors: colors.dark,
};

const lightTheme: Theme = {
  isDarkTheme: false,
  typography,
  colors: colors.light,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: darkTheme,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeMode>) => {
      if (action.payload === 'dark') {
        return darkTheme;
      }

      return lightTheme;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export const reducer = themeSlice.reducer;
