import React from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

export default class PostEditScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Post edit</Text>
                <Button 
                    title="Share to instagram"
                    onPress={() => Linking.openURL('instagram://share')}
                />
                <Button 
                    title="Save Image"
                    onPress={() => this.props.navigation.navigate('SaveImage')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});