import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import Overlay from 'react-native-modal-overlay';

class TransparentMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            menuOpen: false,
            dimensions: undefined,
        };
    }

    onPress = () => {
        if (!this.state.dimensions) {
            this.mainButton.measureInWindow( (px, py, w, h) => {
                this.setState(previousState => {
                    return {
                        menuOpen: !previousState.menuOpen,
                        dimensions: {
                            x: px,
                            y: py,
                            width: w,
                            height: h,
                        }
                    }
                });
                console.log(this.state.dimensions);
            });
        } else {
            this.setState(previousState => {
                return {
                    menuOpen: !previousState.menuOpen,
                    dimensions: previousState.dimensions,
                }
            });
        }        
    }

    cStyles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignContent: 'stretch',
            alignSelf: 'stretch',
            width: '50%',
        },
        touchable: {
            height: 100,
            width: '100%',
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });

    render() {
        if (this.state.dimensions) {
            return (
                <View style={[this.cStyles.container]}>             
                    <TouchableOpacity onPress={this.onPress} style={this.cStyles.touchable}>
                        <Text>Open</Text>
                    </TouchableOpacity>
                    <Overlay visible={this.state.menuOpen} 
                        closeOnTouchOutside
                        animationType="zoomIn"
                        containerStyle={{
                            backgroundColor: 'rgba(0,0,0,0.1)'
                        }}
                        childrenWrapperStyle={{
                            backgroundColor: 'rgba(0,0,0,0.2)',
                            position: 'absolute', 
                            left: this.state.dimensions.x,
                            bottom: this.state.dimensions.height * 1.5,
                            width: this.state.dimensions.width,
                            padding: 0,
                    }}>
                        <TouchableOpacity onPress={this.onPress} style={this.cStyles.touchable}>
                            <Text>Button3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPress} style={this.cStyles.touchable}>
                            <Text>Button2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPress} style={this.cStyles.touchable}>
                            <Text>Button1</Text>
                        </TouchableOpacity>
                    </Overlay>
                </View>
            );
        }
        
        return (
            <View style={this.cStyles.container}>
                <TouchableOpacity onPress={this.onPress} style={this.cStyles.touchable} ref={view => { this.mainButton = view }}>
                    <Text>Open</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

export default class EditScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../slika.jpg')}></Image>
                </View>
                <View style={styles.menuContainer}>
                    <View style={styles.upperMenu}>
                        <TransparentMenu style={styles.tMenu}></TransparentMenu>
                        <TransparentMenu style={styles.tMenu}></TransparentMenu>
                    </View>
                    <View style={styles.lowerMenu}>
                        <Button title='Undo' onPress={() => this.props.navigation.navigate('Home')} />
                        <Button title='Confirm' onPress={() => this.props.navigation.navigate('PostEdit')}/>
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