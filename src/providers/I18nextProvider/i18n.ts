import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';
import { en, vi } from '@/locales';

const resources = {
  en,
  vi,
};

const {
  0: { languageCode },
} = getLocales();

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  fallbackLng: 'en',
  supportedLngs: ['en', 'vi'],
  debug: false,
  ns: ['common'],
  defaultNS: 'common',
  lng: languageCode!,
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
