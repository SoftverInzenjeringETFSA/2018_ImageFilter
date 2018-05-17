import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, ImageBackground, CameraRoll } from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';
//import RNFS from 'react-native-fs;
import { PermissionsAndroid } from 'react-native';
var data = [["CCC"]];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  SaveImg(uri){
  //  RNFS.readDir(RNFS.ExternalStorageDirectoryPath).then((result) => {
  //    console.log('GOT RESULT', result);
  //  return Promise.all([RNFS.stat(result[0].path), result[0].path]);
  //  })
  //  .then((statResult) => {
  //  if (statResult[0].isFile()) {
  //  return RNFS.readFile(statResult[1], 'utf8');
  //  }
  //  return 'no file';
  //  })
  //  .then((contents) => {
  //  console.log(contents);
  //  })
  //  .catch((err) => {
  //  console.log(err.message, err.code);
  //  });
  }
  render() {
    return (
      <ImageBackground source = {require('./Assets/Img/pozadina.jpg')} style= {styles.container}>
        <View style={{height: 120}} />
        <DropdownMenu
          bgColor={'rgba(255,255,255,0.7)'}
          tintColor={'#666666'}
          activityTintColor={'black'}
          // arrowImg={}      
          // checkImage={}   
          // optionTextStyle={{color: '#333333'}}
          // titleStyle={{color: '#333333'}} 
          // maxHeight={300} 
          handler={(selection, row) => this.setState({text: data[selection][row]})}
          data={data}>
            
        </DropdownMenu>
        <TextInput style= {styles.input} placeholder="Folder name...">
              {this.state.text} 
        </TextInput>
        <Button 
                    title="Cancel"
                    onPress={() => this.props.navigation.navigate('PostEdit')}
                />
        <Button 
                    title="Save"
                    onPress={() => this.SaveImg(require('./Assets/Img/pozadina.jpg'))}
                />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  slike: {
    flex: 1,
    width: null,
    height: null
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginBottom: 260,
    color: '#060000',
    paddingHorizontal: 10
  },
  dugme: {
    marginBottom: 250
  }
});