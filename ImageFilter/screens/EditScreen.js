import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Button, 
    Image, 
    TouchableOpacity, 
    Dimensions
} from 'react-native';
import { FileSystem } from 'expo';
import { TransparentMenu } from '../Components.js';

export default class EditScreen extends React.Component {
    onConfirm = async () => {
        // await FileSystem.copyAsync({
        //     from: 'data:image/jpeg;base64,' + this.props.navigation.getParam('base64'),
        //     to: FileSystem.documentDirectory + 'image.jpg'
        // });

        /**
         * OVDJE TREBA SPASAVATI SLIKU
         */

        this.props.navigation.navigate('Share', {
            'uri': this.props.navigation.getParam('uri'),
            'base64': this.props.navigation.getParam('base64')
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: this.props.navigation.getParam('uri')}} style={{ 
                        width: Dimensions.get('window').width, 
                        height: Dimensions.get('window').width // TODO: Pravilno racunanje dimenzija
                    }}></Image>
                </View>
                <View style={styles.menuContainer}>
                    <View style={styles.upperMenu}>
                        <TransparentMenu style={styles.tMenu}></TransparentMenu>
                        <TransparentMenu style={styles.tMenu}></TransparentMenu>
                    </View>
                    <View style={styles.lowerMenu}>
                        <Button title='Undo' onPress={() => this.props.navigation.navigate('Home')} />
                        <Button title='Confirm' onPress={this.onConfirm}/>
                    </View>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    tMenu: {
        flex: 1,
        position: 'absolute',
        overflow: 'visible',
    },
    upperMenu: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        padding: 2,
    },
    lowerMenu: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 2,
    },
    imageContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 0,
    },
    menuContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignContent: 'space-around',
    },
    container: {
        marginTop: 24,
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
});