import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/providers/ThemeProvider';
import { useStyles } from './styles';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { selectAuth } from '@/features/auth/selectors';
import { useNavigation } from '@react-navigation/native';
import { setAuth } from '@/features/auth/slice';
import { RouteName } from '@/routes/types';

const LoginScreen = () => {
  const navigation = useNavigation();
  const auth = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const { theme } = useTheme();
  const styles = useStyles(theme.colors);
  const { t } = useTranslation();

  useEffect(() => {
    const loginAsync = async () => {
      return new Promise(resolve =>
        setTimeout(() => {
          dispatch(setAuth('access_token'));
          resolve(null);
        }, 3000),
      );
    };

    loginAsync();
  }, [dispatch]);

  useEffect(() => {
    if (auth.accessToken) {
      navigation.navigate(RouteName.Dashboard as never);
    }
  }, [auth.accessToken]);

  return (
    <View style={styles.container}>
      <Text>{t('login:title')}</Text>
      <Text>{t('login:description')}</Text>
    </View>
  );
};

export default LoginScreen;
