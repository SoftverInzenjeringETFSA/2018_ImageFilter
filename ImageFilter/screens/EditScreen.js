import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class EditScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Edit</Text>
                <Button 
                    title="Prihvati"
                    onPress={() => this.props.navigation.navigate('PostEdit')}
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