import { responsiveSize } from 'utils/helpers';
// import { Platform } from 'react-native';

export const accessible = true;

export const baseColors = {
  black: 'black',
  white: 'white',
};

export const UIColors = {
  primary: baseColors.black,
  secondary: baseColors.white,
};

export const fontSizes = {
  tiny: responsiveSize(10),
  largeTiny: responsiveSize(11),
  extraExtraSmall: responsiveSize(12),
  extraSmall: responsiveSize(14),
  extraMediumSmall: responsiveSize(15),
  small: responsiveSize(16),
  medium: responsiveSize(18),
  mediumLarge: responsiveSize(20),
  large: responsiveSize(22),
  extraLarge: responsiveSize(24),
  extraLarger: responsiveSize(28),
  extraExtraLarge: responsiveSize(32),
  giant: responsiveSize(36),
};

export const spacing = {
  zero: responsiveSize(0),
  border: responsiveSize(1),
  extraExtraSmall: responsiveSize(3),
  extraSmall: responsiveSize(5),
  small: responsiveSize(8),
  semiMedium: responsiveSize(10),
  medium: responsiveSize(12),
  mediumLarge: responsiveSize(15),
  large: responsiveSize(20),
  extraLarge: responsiveSize(24),
  extraMediumLarge: responsiveSize(28),
  extraExtraLarge: responsiveSize(30),
};

export const fontWeights = {
  thin: '100',
  ultraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  heavy: '800',
  black: '900',
};

// export const fontName = {
//   robotoBold: 'Roboto-Bold',
//   tradeGothicLTStd: Platform.OS === 'android' ? 'TradeGothicBdCn' : 'TradeGothicLTStd-BdCn20Obl',
//   robotoRegular: 'Roboto-Regular',
//   robotoMedium: 'Roboto-Medium',
//   tradeGothicCn: 'TradeGothicCn',
//   tradeGothicLTStdCn18Obl: 'TradeGothicLTStd-Cn18Obl',
// };
