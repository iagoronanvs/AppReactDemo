import React, { Component, Fragment } from 'react';
import { View, Text, Image, Modal, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Styles from './styles/UserListItem';

class UserListItem extends Component {
    
    constructor(props) {
        super(props);
        this.state = { modalVisible: false };
    }

    render() {
        return (
            <Fragment>
                <TouchableOpacity style={Styles.container} onPress={() => { this.setState({modalVisible: true}); }}>
                    <Image source={{uri: this.props.user.image}} style={Styles.image}/>
                    <View style={Styles.info}>
                        <Text style={Styles.name}>{this.props.user.name}</Text>
                        <Text><Icon name="mail" /> {this.props.user.email}</Text>
                        <Text><Icon name="phone" /> {this.props.user.phone}</Text>
                    </View>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent
                    visible={this.state.modalVisible}
                >
                    <View style={Styles.contentModal}>
                        <View style={Styles.closeContainer}>
                            <TouchableOpacity style={Styles.close} onPress={() => {this.setState({modalVisible: false})}}>
                                <Icon name="close" size={30} color="white"/>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.imageContainer}>
                            <Image source={{uri: this.props.user.image}} style={Styles.imageZoom}/>
                            <Text style={Styles.nameInfo}>{this.props.user.name}</Text>
                            <Text style={Styles.textCenter}><Icon name="mail" size={15}/> {this.props.user.email}</Text>
                            <Text style={Styles.textCenter}><Icon name="phone" size={15}/> {this.props.user.phone}</Text>
                            <Text style={Styles.textCenter}><Icon name="find" size={15}/> {this.props.user.address}</Text>
                            <Text style={[Styles.textCenter, {marginTop: 20}]}> {this.props.user.text}</Text>
                        </View>
                    </View>
                </Modal>
            </Fragment>
        );
    }
}

UserListItem.propTypes = {
    user: PropTypes.any
}

export default UserListItem;