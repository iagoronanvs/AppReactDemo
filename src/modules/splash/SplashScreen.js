import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Actions } from 'react-native-router-flux';
import Style from './styles/SplashScreen';
import lang from '../../i18n';

class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
            Actions.replace('home');
        }, 2000);
    }

    render() {
        return (
            <View style={Style.container}>
                <Animatable.View animation="fadeInRight">
                    <Image source={require('../../assets/imgs/logo.png')} style={Style.logo} />
                </Animatable.View>
                <Animatable.View animation="fadeInLeft">
                    <Text>{lang.app_name}</Text>
                </Animatable.View>
            </View>
        )
    }
}

export default SplashScreen;