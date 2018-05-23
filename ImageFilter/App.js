import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { 
  HomeScreen, 
  EditScreen,
  ShareScreen 
} from './Screens';

const RootStack = createStackNavigator(
    {
        Home: { screen: HomeScreen },
        Edit: { screen: EditScreen },
        Share: { screen: ShareScreen },
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
};
