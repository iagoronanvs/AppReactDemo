import React, { Component, Fragment } from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';

import { requestUsers } from '../../actions/UserActions';

import Style from './styles/HomeScreen';
import lang from '../../i18n';
import Header from '../../components/header/Header';
import UserListItem from '../../components/list/UserListItem';

class HomeScreen extends Component {
    
    UNSAFE_componentWillMount () {
        this.props.requestUsers();
    }

    render() {
        return (
            <Fragment>
                <Header />                                
                <FlatList 
                    data={this.props.users}
                    renderItem={({item}) => (<UserListItem user={item} />)}
                />
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    users: state.UserReducer.users
});

export default connect(mapStateToProps, { requestUsers })(HomeScreen);