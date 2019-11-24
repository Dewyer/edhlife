import React from "react";
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator, Picker, ViewStyle } from 'react-native';
import { TextInput } from "react-native-gesture-handler";

export interface Props {
    value?:string,
    onNewValue:(newV:string)=>void,
    style?:ViewStyle
}

export interface State {

}

export default class BasicTextInput extends React.Component<Props, State> 
{    
    
    constructor(props: Props)
    {
        super(props);
        this.state =
            {
            }
    }

    render() {
        return (
            <TextInput
                style={[styles.container, this.props.style]}
                value={this.props.value}
                onChangeText={this.props.onNewValue}
                maxLength={100}
            />
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height: 30,
        width: 200,
        borderColor: "#4ecca3",
        borderWidth:1,
        backgroundColor: "black",
        color: "white",
        outline:"none"
    }

});
