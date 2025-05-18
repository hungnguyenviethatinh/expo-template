export type ThemeMode = 'dark' | 'light';

export type Color = {
  primary: {
    primary_1: string;
    primary_2: string;
    primary_3: string;
    primary_4: string;
    primary_5: string;
    primary_6: string;
    primary_7: string;
    primary_8: string;
    primary_9: string;
    primary_10: string;
    primary_disabled: string;
  };
  secondary: {
    secondary_1: string;
    secondary_2: string;
    secondary_3: string;
    secondary_4: string;
    secondary_5: string;
    secondary_6: string;
    secondary_7: string;
    secondary_8: string;
    secondary_9: string;
    secondary_10: string;
    secondary_disabled: string;
  };
  red: {
    error_1: string;
    error_2: string;
    error_3: string;
    error_4: string;
    error_5: string;
    error_6: string;
    error_7: string;
    error_8: string;
    error_9: string;
    error_10: string;
  };
  green: {
    success_1: string;
    success_2: string;
    success_3: string;
    success_4: string;
    success_5: string;
    success_6: string;
    success_7: string;
    success_8: string;
    success_9: string;
    success_10: string;
  };
  gold: {
    warning_1: string;
    warning_2: string;
    warning_3: string;
    warning_4: string;
    warning_5: string;
    warning_6: string;
    warning_7: string;
    warning_8: string;
    warning_9: string;
    warning_10: string;
  };
  neutralColor: {
    headingText: string;
    text: string;
    secondaryText: string;
    disableText: string;
    defaultBorder: string;
    separator: string;
    white: string;
    servingStatus: string;
    borderServingStatus: string;
  };
  background: {
    layoutBackground_1: string;
    layoutBackground_2: string;
    layoutBackground_3: string;
    logOutIconBackground: string;
    inputFieldBg: string;
    servingStatusBackground: string;
    tagPromotion: string;
    addCartButton: string;
  };
};

export type Typography = {
  titleTable: Font;

  displayRegular: Font;
  displaySemiBold: Font;
  displayBold: Font;
  displayExtraBold: Font;

  heading_1_Regular: Font;
  heading_1_SemiBold: Font;
  heading_1_Bold: Font;
  heading_1_ExtraBold: Font;

  heading_2_Regular: Font;
  heading_2_SemiBold: Font;
  heading_2_Bold: Font;
  heading_2_ExtraBold: Font;

  heading_3_Regular: Font;
  heading_3_SemiBold: Font;
  heading_3_Bold: Font;
  heading_3_ExtraBold: Font;

  body_1_Regular: Font;
  body_1_SemiBold: Font;
  body_1_Bold: Font;

  body_2_Regular: Font;
  body_2_SemiBold: Font;
  body_2_Bold: Font;

  caption_1_Regular: Font;
  caption_1_SemiBold: Font;
  caption_1_Bold: Font;

  caption_2_Regular: Font;
  caption_2_SemiBold: Font;
  caption_2_Bold: Font;

  caption_3_Regular: Font;
  caption_3_SemiBold: Font;
  caption_3_Bold: Font;
};

type Font = Partial<{
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: number;
}>;
