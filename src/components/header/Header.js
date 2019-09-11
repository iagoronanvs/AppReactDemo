import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import lang from '../../i18n';
import Styles from './styles/Header';

class Header extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Image source={require('../../assets/imgs/logo.png')} style={Styles.logo}/>
                <Text>{lang.app_name}</Text>
            </View>
        );
    }
}

export default Header;