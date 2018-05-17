import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { HomeScreen, ImageSelectionScreen, EditScreen, PostEditScreen, SaveImageScreen } from './Screens';

const RootStack = createStackNavigator(
    {
        Home: { screen: HomeScreen },
        ImageSelection: { screen: ImageSelectionScreen },
        Edit: { screen: EditScreen },
        PostEdit: { screen: PostEditScreen }, 
        SaveImage: {screen: SaveImageScreen}    },
    {
        initialRouteName: 'Edit',
        headerMode: 'none',
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
};
