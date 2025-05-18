import { Color, Typography } from '@/theme/types';

export type Theme = {
  isDarkTheme: boolean;
  colors: Color;
  typography: Partial<Typography>;
};
