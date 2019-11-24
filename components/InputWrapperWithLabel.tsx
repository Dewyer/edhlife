import React from "react";
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator, Picker, ViewStyle } from 'react-native';
import BasicText from "./BasicText";

export interface Props
{
    title: string,
    style?:ViewStyle,
    childrenContainerStyle?:ViewStyle
}

export interface State
{

}

export default class InputWrapperWithLabel extends React.Component<Props, State>
{

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
                <BasicText
                    size="small"
                    style={{flex:1}}
                >
                        {this.props.title}
                </BasicText>
                <View
                    style={[styles.childrenContainer,this.props.childrenContainerStyle]}
                >
                    {this.props.children}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexDirection: "row",
        width:"100%"
    },
    childrenContainer:
    {
        display:"flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    }

});
