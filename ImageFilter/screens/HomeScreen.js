import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <Button 
                    title="Choose an image"
                    onPress={() => this.props.navigation.navigate('ImageSelection')}
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