import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class PostEditScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Post edit</Text>
                <Button 
                    title="Home"
                    onPress={() => this.props.navigation.navigate('Home')}
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