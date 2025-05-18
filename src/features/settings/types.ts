import { LanguageCode } from '@/locales/types';
import { ThemeMode } from '@/theme/types';

export type StaffSettings = {
  staffId: string;
  displayMode: ThemeMode;
  language: LanguageCode;
};

export type StaffSettingsStore = {
  [k: string]: StaffSettings;
};
