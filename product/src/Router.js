import React from 'react';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  HomeScreen,
  NotificationScreen
} from './screens';

const SignedIn = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabbarLabel: 'HOME',
      tabBarIcon: ({tintColor}) => (
        <Icon
          name={'home'}
          size={30}
          style={{ color: tintColor }}
        />
      )
    }
  },
  Notification: {
    screen: NotificationScreen,
    navigationOptions: {
      tabbarLabel: 'NOTIFICATION',
      tabBarIcon: ({tintColor}) => (
        <Icon
          name={'bell'}
          size={30}
          style={{ color: tintColor }}
        />
      )
    }
  },
});

export default SignedIn;