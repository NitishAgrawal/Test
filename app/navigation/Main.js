import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import { FirstScreen } from 'screens/FirstScreen';
import { SecondScreen } from 'screens/SecondScreen';

const RootStack = createStackNavigator({
  FirstScreen: {
    screen: FirstScreen,
    key: 'FirstScreen',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
  SecondScreen: {
    screen: SecondScreen,
    key: 'SecondScreen',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
});

export const Main = createAppContainer(RootStack);
