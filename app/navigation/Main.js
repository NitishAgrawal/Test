import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import { AllStoresScreen } from 'screens/AllStoresScreen';
import { SecondScreen } from 'screens/SecondScreen';

const RootStack = createStackNavigator({
  AllStoresScreen: {
    screen: AllStoresScreen,
    key: 'AllStoresScreen',
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
