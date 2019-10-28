import React from "react";
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator, ViewStyle } from 'react-native';
import BasicBackground from "./BasicBackground";
import PresetPicker from "./PresetPicker";
import BasicText from "./BasicText";
import IconButton from "./IconButton";

export interface Props
{
    title:string,
    style?:ViewStyle
}

export interface State
{

}

export default class TitleSection extends React.Component<Props, State> {

    constructor(props: Props)
    {
        super(props);
        this.state =
            {
            }
    }

    render()
    {
        return (
            <View
                style={[styles.container,this.props.style]}
            >
                <BasicText style={styles.topText}>{this.props.title}</BasicText>
                <View
                    style={styles.managerContainer}
                >
                    {this.props.children}

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: "#4ecca3",
        borderWidth: 1,
        padding: 20,
        borderRadius: 10,
        height: 100,
        width: "100%",
        paddingTop: 35
    },
    topText:
    {
        position: "absolute",
        top: 10,
        left: 20,
    },
    managerContainer:
    {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "100%"
    }

});
