import React from "react";
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import BasicBackground from "../components/BasicBackground";
import PresetManager from "../components/PresetManager";
import BigTitle from "../components/BasicText";
import BasicText from "../components/BasicText";
import { NavigationState, NavigationScreenProp, NavigationParams } from "react-navigation";

export interface Props
{
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

export interface State
{

}

export default class LifeCounterScreen extends React.Component<Props, State> {

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
            <BasicBackground
                containerStyle={null}
            >
                <View
                    style={styles.container}
                >
                    <BasicText size="large" style={{ marginBottom: 20 }}>Edh Life Total</BasicText>

                    Life
                </View>
            </BasicBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        padding: 20,
        width: "100%"
    },
    testText:
    {
        color: "white",
        fontFamily: "bold"
    },
    box:
    {
        backgroundColor: "white",
        width: 100,
        height: 100
    }
});
