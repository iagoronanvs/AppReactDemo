import React, { Fragment, Component } from 'react';
import { Text, TextInput, View } from 'react-native';

import Styles from './styles/Input';

class Input extends Component {
    constructor(props){
        super(props);

        this.state = {
            stylesView: [Styles.conatiner]
        }

        this.props.border && this.state.stylesView.push(Styles.border);
    }

    render(){
        return (
            <Fragment>
                {this.props.error && <Text>{this.props.error}</Text>}
                <View style={this.state.stylesView}>
                    <Text style={Styles.default}>{this.props.label}</Text>
                    <TextInput
                        secureTextEntry={this.props.secure}
                        value={this.props.value} 
                        onChangeText={this.props.change}
                    />
                </View>
            </Fragment>
        )
    }
}

export default Input;