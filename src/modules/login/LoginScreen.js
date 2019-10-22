import React, { Component, Fragment } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import {
    changeEmail,
    changePassword,
    requestLogin
} from '../../actions/LoginActions';
import {
    loadingActive,
    loadingDismiss
} from '../../actions/LoadingActions';

import * as Validations from '../../util/Validations';

import Style from './styles/LoginScreen';
import lang from '../../i18n';
import Header from '../../components/header/Header';
import SubHeader from '../../components/header/SubHeader';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

class LoginScreen extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    async validate() {
        await this.setState({
            error: false,
            errorEmail: null,
            errorPassword: null,
        });

        (!this.props.email || this.props.email == '') && this.setState({errorEmail: lang.error_empty_email, error: true});
        (this.props.email != '' && !Validations.email(this.props.email)) && this.setState({errorEmail: lang.error_invalid_email, error: true});
        (!this.props.password || this.props.password == '') && this.setState({errorPassword: lang.error_empty_password, error: true});
    }

    async submit() {
        await this.validate();
        if (!this.state.error) {
            const { email, password } = this.props;
            await this.props.requestLogin(email, password);
        }
    }

    render() {
        const {
            errorEmail, 
            errorPassword, 
        } = this.state;

        const { 
            email, 
            password, 
            loading,
            changeEmail,
            changePassword,
        } = this.props;

        return (
            <Fragment>
                <Header />
                <SubHeader title={lang.login} subtitle={lang.login_subtitle} />
                <View style={Style.container}>
                    <Input label={lang.email} error={errorEmail} value={email} change={(text) => {changeEmail(text)}} border />
                    <Input label={lang.password} error={errorPassword} value={password} change={(text) => {changePassword(text)}} border secure />
                    <Button text={lang.login} loading={loading} action={() => {this.submit()}} dark rounded uppercase />
                </View>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    email: state.LoginReducer.email,
    password: state.LoginReducer.password,
    loading: state.LoadingReducer.loading
});

const mapDispatchToProps = {
    loadingActive,
    loadingDismiss,
    changeEmail,
    changePassword,
    requestLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);