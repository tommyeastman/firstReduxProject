import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
    const { viewStyle, labelStyle, inputStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={labelStyle}>{props.label}</Text>
            <TextInput
                secureTextEntry={props.securePassed}
                placeholder={props.placeholderPassed}
                autoCorrect={false}
                autoCapitalize="none"
                value={props.valuePassed}
                onChangeText={props.onChangeTextPassed}
                style={inputStyle}
            />
        </View>
    );
};

const styles = {
    viewStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    inputStyle: {
        color: '#000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }

};

export { Input };
