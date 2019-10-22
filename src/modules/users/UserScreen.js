import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {
    requestVseeUsers,
    requestVseeCall,
    requestVseeChat
} from '../../actions/UserActions';

import Style from './styles/UserScreen';

import Button from '../../components/button/Button';


class UserScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: 'iagovsantosmycompanybr+dstark',
            password: '123456'
        }
    }

    componentDidMount() {
        this.props.requestVseeUsers();
    }

    render() {
        const {
            username,
            password
        } = this.state;

        const {
            vsee_users,
            requestVseeCall,
            requestVseeChat
        } = this.props;

        return (
            <View style={Style.container}>
                {vsee_users && vsee_users.length > 0 && vsee_users.map((user) => {
                    if (user.id != username) {
                        return (
                            <View style={Style.item}>
                                <Text style={Style.text}>{user.fn} {user.ln}</Text>
                                <View style={Style.options}>
                                    <TouchableOpacity style={{marginRight: 10}} onPress={() => { requestVseeChat(username, password, user.id) }}>
                                        <Icon name="comment" size={20}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { requestVseeCall(username, password, user.id) }}>
                                        <Icon name="video-camera" size={20}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }
                })}
            </View>
        )
    }
}

const mapStateToProps = state => ({
    vsee_users: state.UserReducer.vsee_users
});

const mapDispatchToProps = {
    requestVseeUsers,
    requestVseeCall,
    requestVseeChat
}

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);