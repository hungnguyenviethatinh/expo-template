import { ReactNode, createContext, useCallback, useContext } from 'react';
import { I18nextProvider } from 'react-i18next';
import { LanguageCode } from '@/locales/types';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { localizationSlice } from '@/features/localization';
import { selectLanguage } from '@/features/localization/selectors';
import i18n from './i18n';

type I18nextProviderProps = {
  children: ReactNode;
};

type I18nextContextState = {
  language: LanguageCode;
  changeLanguage: (lng: LanguageCode) => void;
};

const I18nextContext = createContext<I18nextContextState>({
  language: 'vi',
  changeLanguage: (lng: LanguageCode) => {},
});

export default ({ children }: I18nextProviderProps) => {
  const language = useAppSelector(selectLanguage);
  const dispatch = useAppDispatch();

  const changeLanguage = useCallback(
    (lng: LanguageCode) => {
      dispatch(localizationSlice.setLanguage(lng));
      i18n.changeLanguage(lng);
    },
    [dispatch],
  );

  return (
    <I18nextContext.Provider value={{ language, changeLanguage }}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </I18nextContext.Provider>
  );
};

export const useI18next = () => {
  return useContext(I18nextContext);
};
