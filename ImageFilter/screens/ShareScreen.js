import React from 'react';
import { StyleSheet, View, Text, Linking} from 'react-native';
import{Button, SocialIcon} from 'react-native-elements';

export default class ShareScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Share Your Image</Text>
                <SocialIcon
                    title="Share With Instagram"
                    button
                    type='instagram'
                    onPress={() => Linking.openURL('instagram://share')}
                />
                
                <SocialIcon
                    title='Share With Facebook'
                    button
                    type='facebook'
                    onPress={() => this.props.navigation.navigate('Home')}
                />

                <Button raised
                    title="Back To Editing"
                    borderRadius={25}
                    backgroundColor={'#ff6666'}
                    containerViewStyle={{ alignSelf:'center',marginTop: 5, marginBottom: 5}}
                    buttonStyle={{width:325, height: 50}}
                    textStyle={{fontWeight:'bold'}}
                    icon={{name: 'arrow-left', type: 'font-awesome'}}
                    onPress={() => this.props.navigation.navigate('Edit')}
                />
            </View>
        
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        alignContent: 'center',
    },
    heading: {
        marginTop: 50,
        fontSize: 20,
        padding:10,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    button: {
        borderRadius: 25,
    },
});
