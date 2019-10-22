import React, { Component, Fragment } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { 
    changeName,
    changeEmail,
    changePassword,
    changeConfirmPassword,
    requestRegisterUser
} from '../../actions/RegisterActions';
import {
    loadingActive,
    loadingDismiss
} from '../../actions/LoadingActions';
import * as Validations from '../../util/Validations';

import Style from './styles/RegisterScreen';
import lang from '../../i18n';
import Header from '../../components/header/Header';
import SubHeader from '../../components/header/SubHeader';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

class RegisterScreen extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    async validate() {
        await this.setState({
            error: false,
            errorName: null,
            errorEmail: null,
            errorPassword: null,
            errorConfirmPassword: null
        });

        (!this.props.name || this.props.name == '') && this.setState({errorName: lang.error_empty_name, error: true});
        (!this.props.email || this.props.email == '') && this.setState({errorEmail: lang.error_empty_email, error: true});
        (this.props.email != '' && !Validations.email(this.props.email)) && this.setState({errorEmail: lang.error_invalid_email, error: true});
        (!this.props.password || this.props.password == '') && this.setState({errorPassword: lang.error_empty_password, error: true});
        (!this.props.confirmPassword || this.props.confirmPassword == '') && this.setState({errorConfirmPassword: lang.error_empty_confirm_password, error: true});
        (this.props.password != '' && this.props.confirmPassword != '' && this.props.confirmPassword != this.props.password) && this.setState({errorConfirmPassword: lang.error_invalid_confirm_password, error: true});
    }

    async submit() {
        await this.validate();
        if (!this.state.error) {
            const { name, email, password } = this.props;
            await this.props.requestRegisterUser({
                name,
                email,
                password
            });
        }
    }

    render() {
        const { 
            errorName, 
            errorEmail, 
            errorPassword, 
            errorConfirmPassword 
        } = this.state;

        const { 
            name, 
            email, 
            password, 
            confirmPassword,
            loading,
            changeName,
            changeEmail,
            changePassword,
            changeConfirmPassword 
        } = this.props;

        return (
            <Fragment>
                <Header />
                <SubHeader title={lang.register} subtitle={lang.register_subtitle} />
                <View style={Style.container}>
                    <Input label={lang.name} error={errorName} value={name} change={(text) => {changeName(text)}} border />
                    <Input label={lang.email} error={errorEmail} value={email} change={(text) => {changeEmail(text)}} border />
                    <Input label={lang.password} error={errorPassword} value={password} change={(text) => {changePassword(text)}} border secure />
                    <Input label={lang.confirm_password} error={errorConfirmPassword} value={confirmPassword} change={(text) => {changeConfirmPassword(text)}} border secure />
                    <Button text={lang.register} loading={loading} action={() => {this.submit()}} dark rounded uppercase />
                </View>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    name: state.RegisterReducer.name,
    email: state.RegisterReducer.email,
    password: state.RegisterReducer.password,
    confirmPassword: state.RegisterReducer.confirmPassword,
    loading: state.LoadingReducer.loading
});

const mapDispatchToProps = {
    changeName,
    changeEmail,
    changePassword,
    changeConfirmPassword,
    requestRegisterUser,
    loadingActive,
    loadingDismiss
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);