import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class PostEditScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Post Edit</Text>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Home')}
                >
                    <Text style={styles.buttonText}>HOME</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('SaveImage')}
                >
                    <Text style={styles.buttonText}>SAVE IMAGE</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Share')}
                >
                    <Text style={styles.buttonText}>SHARE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#DDDDDD',
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
        backgroundColor: '#4da6ff',
        width: 150,
        height: 50,
        borderRadius: 25,
        
    },

    buttonText: {
        fontWeight: 'bold',
    },
    heading: {
        marginTop: 50,
        fontSize: 20,
        padding:10,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
});