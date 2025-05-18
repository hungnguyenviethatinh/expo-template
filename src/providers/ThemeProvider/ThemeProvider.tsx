import { ReactNode, createContext, useCallback, useContext } from 'react';
import { themeSlice } from '@/features/theme';
import { selectTheme } from '@/features/theme/selectors';
import { Theme } from '@/features/theme/types';
import { ThemeMode } from '@/theme/types';
import { useAppSelector, useAppDispatch } from '@/hooks';

type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeContextState = {
  theme: Theme;
  changeTheme: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextState>({
  theme: null!,
  changeTheme: (mode: ThemeMode) => {},
});

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const changeTheme = useCallback(
    (mode: ThemeMode): void => {
      dispatch(themeSlice.changeTheme(mode));
    },
    [dispatch],
  );

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export default ThemeProvider;
