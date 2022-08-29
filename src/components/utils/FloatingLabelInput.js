import React from 'react';
import {View, TextInput, Text} from "react-native";
import config from '../../config';

export default class FloatingLabelInput extends React.Component {
    
    state = {
        isFocused: false
    };

    handleFocus = () => this.setState({isFocused: true});
    handleBlur = () => this.setState({isFocused: false});

    render() {
        const {label, ...props } = this.props;
        const {isFocused} = this.state;
        const labelStyle = {
            position: 'absolute',
            left: 0,
            top: -5 ,
            color: !isFocused ? '#7d7d82' : config.defaultFontColor,
            fontFamily: config.defaultFont,
            fontWeight: 'bold',
        };
        return (
            <View style={{paddingTop: 15, marginBottom: 15, width: '100%'}}>
                <Text style={labelStyle}>
                    {label}
                </Text>
                <TextInput


                    style={[{
                        borderRadius: 5,
                    height: 35,
                    padding: 10,
                    fontSize: 18,
                    color: config.defaultFontColor,
                        backgroundColor: "#B8B89C",
                    fontWeight: 'bold',
                    fontFamily: config.defaultFont
                }, props.inputStyle]}
                    {...props}
                    textBreakStrategy={'simple'}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}/>
                    
            </View>
        );
    }
}