import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LanguageCode } from '@/locales/types';

const initialState: LanguageCode = 'vi' as LanguageCode;

const localizationSlice = createSlice({
  name: 'localization',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<LanguageCode>) => {
      return action.payload;
    },
  },
});

export const { setLanguage } = localizationSlice.actions;
export const reducer = localizationSlice.reducer;
