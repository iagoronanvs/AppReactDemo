import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import {
    requestVseeCall,
    requestVseeLogin,
    actionHideModal,
    openVsee
} from '../../actions/UserActions';

import Style from './styles/ExampleScreen';

import Button from '../../components/button/Button';


class ExampleScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: 'iagovsantosmycompanybr+zherzog',
            password: '123456'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            console.log(this.state.username);
        },1000)
    }

    render() {
        const {
            username,
            password
        } = this.state;

        const {
            requestVseeCall,
            requestVseeLogin,
        } = this.props;

        return (
            <View style={Style.container}>
                <Button text="Usuários" action={() => { Actions.user() }} dark rounded uppercase />
                <Button text="Aguardar Vídeo Chamada" action={() => { requestVseeLogin(username, password) }} dark rounded uppercase />
                {/* <Button text="Vídeo Chamada" action={() => { requestVseeCall() }} dark rounded uppercase /> */}
            </View>
        )
    }
}

const mapStateToProps = state => ({
    vsee_command: state.UserReducer.vsee_command,
    modal_is_visible: state.UserReducer.modal_is_visible,
});

const mapDispatchToProps = {
    requestVseeCall,
    requestVseeLogin,
    actionHideModal,
    openVsee
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleScreen);






//import { Modal } from 'react-native-irvs-modal';

// componentDidMount() {
//     this.props.requestVseeLogin();
//     this.props.requestVseeCall();
// }

// openVSee(url) {
//     //let url = 'vsee:3jjfeuhhn4o8guqeinpob8w7bamgzhbqzmqxf0sex6xqor3hbajqqcfuycavm6q2?q=iwzygm9m';
//     Linking.openURL(url).then((data) => {
//         alert('VSee Opened');
//     }).catch(() => {
//         alert('Make sure VSee installed on your device');
//     });
// }

// confirmButton = () => {
//     this.props.actionHideModal();
//     setTimeout(() => {
//         this.props.openVsee(this.props.vsee_command);
//     }, 1000);
// }

// <Modal
//     visible={modal_is_visible} 
//     type="warning"
//     animation="fade"
//     title="Warning!"
//     message="Try again."
//     confirmButtonAction={this.confirmButton}
// />