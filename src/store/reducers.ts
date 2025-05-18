import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from '@/features/auth';
import { localizationSlice } from '@/features/localization';
import { settingsSlice } from '@/features/settings';
import { themeSlice } from '@/features/theme';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  localization: localizationSlice.reducer,
  settings: settingsSlice.reducer,
  theme: themeSlice.reducer,
});

export { rootReducer };
export default rootReducer;
