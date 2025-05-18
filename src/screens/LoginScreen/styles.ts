import { StyleSheet } from 'react-native';
import { Color } from '@/theme/types';

export const useStyles = (colors: Color) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background.layoutBackground_1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return styles;
};
