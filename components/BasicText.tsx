import React from "react";
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator, Picker } from 'react-native';
import BasicBackground from "./BasicBackground";

export interface Props {
    style?:any,
    size?:"normal"|"large"|"small"
}

export interface State {

}

export default class BasicText extends React.Component<Props, State> {

    getSize()
    {
        let sizes = {"large":30,"small":"15","normal":22};
        if (this.props.size === undefined)
        {
            return sizes["normal"];
        }
        return sizes[this.props.size];
    }

    render() {
        return (
            <Text style={[{fontSize:this.getSize()},styles.text,this.props.style]}>{this.props.children}</Text>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        fontFamily:"bold",
        color:"#4ecca3"
    }

});
