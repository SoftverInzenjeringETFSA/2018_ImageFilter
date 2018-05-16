import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ImageSelectionScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ImageSelection</Text>
                <Button 
                    title="Edit"
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
        alignItems: 'center',
        justifyContent: 'center',
    },
});