import React, { Component } from 'react';
import { View, Image, Text, Button as BTN } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

//import { Button as ButtonBeta } from 'mycomponent';

import Style from './styles/SplashScreen';
import lang from '../../i18n';
import Button from '../../components/button/Button';
import Alert from '../../components/alert/Alert';

class SplashScreen extends Component {

    // componentDidMount() {
    //     const { user } = this.props;
    //     if (user && user.id) {
    //         console.log(user);
    //         setTimeout(() => {
    //             Actions.replace('home');
    //         }, 3000);
    //     }
    // }

    render() {
        return (
            <View style={Style.container}>
                <Animatable.View animation="fadeInRight">
                    <Image source={require('../../assets/imgs/logo.png')} style={Style.logo} />
                </Animatable.View>
                <Animatable.View animation="fadeInLeft">
                    <Text>{lang.app_name}</Text>
                </Animatable.View>
                <View style={Style.options}>
                    <Animatable.View animation="fadeInLeft" delay={1000}>
                        <Button text={lang.login} dark border rounded uppercase action={() => {Actions.login()}} />
                    </Animatable.View>
                    <Animatable.View animation="fadeInRight" delay={1000}>
                        <Button text={lang.register} dark border rounded uppercase action={() => {Actions.register()}} />
                    </Animatable.View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    user: state.LoginReducer.user
})

export default connect(mapStateToProps)(SplashScreen);