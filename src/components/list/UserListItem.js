import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Styles from './styles/UserListItem';

const UserListItem = props => {
    return (
        <View style={Styles.container}>
            <Image source={{uri: props.user.image}} style={Styles.image}/>
            <View style={Styles.info}>
                <Text style={Styles.name}>{props.user.name}</Text>                
                <Text><Icon name="mail" /> {props.user.email}</Text>
                <Text><Icon name="phone" /> {props.user.phone}</Text>
            </View>
        </View>
    );
}

export default UserListItem;