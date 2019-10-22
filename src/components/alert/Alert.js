import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Modal from "react-native-modal";
import { connect } from 'react-redux';

import Style from './styles/Alert';
import { hide } from '../../actions/AlertActions';
import Button from '../button/Button';
import lang from '../../i18n';

class Alert extends Component {
    render() {
        const {
            title,
            isVisible,
            message,
            hide
        } = this.props;
        return (
            <Modal isVisible={isVisible}>
                <View style={Style.content}>
                    <Text style={Style.contentTitle}>{title}</Text>
                    <Text style={Style.contentTitle}>{message}</Text>
                    <Button dark uppercase
                        action={() => {hide()}}
                        text={lang.ok}
                    />
                </View>
            </Modal>
        )
    }
}

const mapStateToProps = state => ({
    isVisible: state.AlertReducer.isVisible,
    title: state.AlertReducer.title,
    message: state.AlertReducer.message
})

const mapDispatchToProps = {
    hide
}

export default connect(mapStateToProps, mapDispatchToProps)(Alert);