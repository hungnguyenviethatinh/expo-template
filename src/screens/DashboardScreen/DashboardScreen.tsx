import { useEffect, useState } from 'react';
import { View, Text, Switch } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/providers/ThemeProvider';
import { useI18next } from '@/providers/I18nextProvider';
import { useStyles } from './styles';

const DashboardScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVietnamese, setIsVietnamese] = useState(false);

  const { theme, changeTheme } = useTheme();
  const { changeLanguage } = useI18next();
  const { t } = useTranslation();
  const { colors } = theme;
  const styles = useStyles(colors);

  const toggleThemeMode = () => setIsDarkMode(previousState => !previousState);
  const toggleLanguage = () => setIsVietnamese(previousState => !previousState);

  useEffect(() => {
    changeTheme(isDarkMode ? 'dark' : 'light');
  }, [isDarkMode, changeTheme]);

  useEffect(() => {
    changeLanguage(isVietnamese ? 'vi' : 'en');
  }, [isVietnamese, changeLanguage]);

  return (
    <View style={styles.container}>
      <Text>{t('dashboard:title')}</Text>
      <Text>{t('dashboard:changeTheme')}</Text>
      <Switch
        trackColor={{ false: colors.secondary.secondary_1, true: colors.primary.primary_1 }}
        thumbColor={isDarkMode ? colors.primary.primary_10 : colors.secondary.secondary_10}
        ios_backgroundColor={colors.background.layoutBackground_3}
        onValueChange={toggleThemeMode}
        value={isDarkMode}
      />
      <Text>{t('dashboard:changeLanguage')}</Text>
      <Switch
        trackColor={{ false: colors.secondary.secondary_1, true: colors.primary.primary_1 }}
        thumbColor={isVietnamese ? colors.primary.primary_10 : colors.secondary.secondary_10}
        ios_backgroundColor={colors.background.layoutBackground_3}
        onValueChange={toggleLanguage}
        value={isVietnamese}
      />
    </View>
  );
};

export default DashboardScreen;
