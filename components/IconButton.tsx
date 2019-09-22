import React from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator, Picker } from 'react-native';
import BasicBackground from "./BasicBackground";
import { TouchableHighlight } from "react-native-gesture-handler";

export interface Props {
    size?:number,
    width?:number,
    height?:number,
    style?:any,
    source:any
}

export interface State {

}

export default class IconButton extends React.Component<Props, State> {

    getSizeStyle()
    {
        if (this.props.size !== undefined)
        {
            return { width: this.props.size, height: this.props.size};
        }
        else if (this.props.width !== undefined || this.props.height !== undefined)
        {
            return { width: this.props.width, height: this.props.height };
        }
    }

    render() {
        return (
            <TouchableHighlight
                style={[this.getSizeStyle(),this.props.style]}
            >
                <Image style={this.getSizeStyle()} source={this.props.source}/>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "bold",
        color: "#4ecca3"
    }

});
