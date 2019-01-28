import {
  NetInfo,
  Dimensions,
  Platform,
} from 'react-native';
import DismissKeyboard from 'dismissKeyboard';

export const dismissKeyboardHandler = () => DismissKeyboard();

export const isObject = value => Object.prototype.toString.call(value).slice(8, -1) === 'Object';

export const isString = value => Object.prototype.toString.call(value).slice(8, -1) === 'String';

export const capitalize = s => ((typeof s !== 'string') ? '' : s.charAt(0).toUpperCase() + s.slice(1));

export const getRatio = (val1, val2) => Math.round(Number(val1) / Number(val2) * 100);

// platform specific constant
const iOSNavbarHeight = 64;
const androidNavbarHeight = 44;
const iOSStatusbarHeight = 20;
const androidStatusbarHeight = 0;

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const NavBarHeight = isIOS ? iOSNavbarHeight : androidNavbarHeight;
export const statusBarHeight = isIOS ? iOSStatusbarHeight : androidStatusbarHeight;

// utility functions
const sizeDenominator = 765;

export const windowSize = () => Dimensions.get('window');

export const responsiveSize = (value) => {
  const { width, height } = windowSize();

  return (Math.sqrt((height * height) + (width * width)) * (value / sizeDenominator));
};

export const isNetworkConnected = (action) => {
  NetInfo.isConnected.fetch().then((isConnected) => {
    action(isConnected);
  });
};

export const isEmpty = (object) => {
  if (object
    && Object.keys(object).length > 0) {
    return false;
  }

  return true;
};
