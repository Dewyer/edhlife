import React from "react";
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator, Picker, ViewStyle, Button } from 'react-native';
import BasicBackground from "./BasicBackground";
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
import BasicText from "./BasicText";

export interface Props
{
    style?: ViewStyle,
    text?:string,
    size?:Partial<{width:number,height:number}>,
    backgroundColor?:string,
    onPress?:()=>void
}

export interface State
{

}

export default class BasicButton extends React.Component<Props, State> {

    static defaultProps:Props = {
        text:"",
        size:{height:35,width:100},
        backgroundColor:"#4ecca3"
    };


    render()
    {
        return (
            <Button
            /*
                style={[
                    styles.btn,
                    {...this.props.size},
                    { backgroundColor:this.props.backgroundColor},
                    {...this.props.style}
                ]}
                //onPress={this.props.onPress}
                onPressIn={this.props.onPress}*/
                title="asd"
                onPress={this.props.onPress}
            />

        );
        //<BasicText style={{color:"white"}} size={"normal"}>{this.props.text}</BasicText>

    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "bold",
        color: "#4ecca3",
        textAlign:"center"
    },
    btn:
    {
        borderRadius:4,
        alignItems:"center",
        justifyContent:"center"
    },
    centered:
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }

});
