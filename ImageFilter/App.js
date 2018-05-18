import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { HomeScreen, ImageSelectionScreen, EditScreen, PostEditScreen, SaveImageScreen,  ShareScreen } from './Screens';

const RootStack = createStackNavigator(
    {
        Home: { screen: HomeScreen },
        ImageSelection: { screen: ImageSelectionScreen },
        Edit: { screen: EditScreen },
        PostEdit: { screen: PostEditScreen }, 
        SaveImage: {screen: SaveImageScreen},
        Share: { screen: ShareScreen},
    },
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

/*Emirove izmjene
var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};
 
 
ImagePicker.showImagePicker(options, (response) => {
  console.log('Response = ', response);
 
  if (response.didCancel) {
    console.log('User cancelled image picker');
  }
  else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  }
  else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  }
  else {
    let source = { uri: response.uri };
 
   
 
    this.setState({
      avatarSource: source
    });
  }
});
*/