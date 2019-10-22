import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import lang from '../../i18n';
import Styles from './styles/SubHeader';

class SubHeader extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.title}>{this.props.title}</Text>
                <Text style={Styles.subtitle}>{this.props.subtitle}</Text>
            </View>
        );
    }
}

export default SubHeader;