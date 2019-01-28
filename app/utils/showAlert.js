import { Alert } from 'react-native';
import _ from 'lodash';

export const showPopupAlert = (message, onOKPressed) => {
  let okPressed = onOKPressed;

  if (_.isUndefined(onOKPressed)) { okPressed = _.noop; }
  Alert.alert(
    '',
    message,
    [
      { text: 'OK', onPress: okPressed },
    ],
  );
};

export const showOptionAlert = (message, buttonOk, buttonCancel, action, title) => {
  Alert.alert(
    title,
    message,
    [
      { text: buttonOk, onPress: action },
      { text: buttonCancel },
    ],
    { cancelable: false },
  );
};
