import React, { Fragment, Component } from 'react';
import { Text, TouchableOpacity, ActivityIndicator, View } from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles/Button';

class Button extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            stylesButton: [Styles.default],
            stylesText: [],
            stylesLoading: 'black'
        }

        this.props.border && this.state.stylesButton.push(Styles.border);
        this.props.rounded && this.state.stylesButton.push(Styles.rounded);
        this.props.uppercase && this.state.stylesText.push(Styles.uppercase);
        this.props.dark && this.state.stylesButton.push(Styles.dark) 
                        && this.state.stylesText.push(Styles.textLigth);
    }

    render(){
        return (
            <Fragment>
                {!this.props.loading && (
                    <TouchableOpacity onPress={this.props.action} style={this.state.stylesButton}>
                        <Text style={this.state.stylesText}>{this.props.text}</Text>
                    </TouchableOpacity>
                )}
                {this.props.loading && (
                    <View style={this.state.stylesButton}>
                        <ActivityIndicator color={this.props.dark ? 'white' : 'black'} />
                    </View>
                )}
            </Fragment>
        )
    }
}

Button.propTypes = {
    border: PropTypes.bool,
    rounded: PropTypes.bool,
    uppercase: PropTypes.bool,
    dark: PropTypes.bool,
    loading: PropTypes.bool,
    action: PropTypes.func
}

export default Button;