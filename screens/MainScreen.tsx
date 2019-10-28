import React from "react";
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import BasicBackground from "../components/BasicBackground";
import PresetManager from "../components/PresetManager";
import BigTitle from "../components/BasicText";
import BasicText from "../components/BasicText";
import BasicButton from "../components/BasicButton";
import { NavigationState, NavigationScreenProp, NavigationParams } from "react-navigation";
import NumberOfPlayersManager from "../components/NumberOfPlayersManager";

export interface Props
{
    navigation: NavigationScreenProp<NavigationState, NavigationParams>

}

export interface State
{

}

export default class MainScreen extends React.Component<Props, State> {

    constructor(props:Props)
    {
        super(props);
        this.goToLifeCounter = this.goToLifeCounter.bind(this);

        this.state = 
        {
        }
    }

    goToLifeCounter()
    {
        console.log("asdasd");
        //this.props.navigation.navigate("LifeCounter");
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
                    <BasicText size="large" style={{marginBottom:20}}>Edh Life Total</BasicText>
                    <PresetManager />
                    <NumberOfPlayersManager />

                    <BasicButton
                        text={"Go"}
                        style={{marginTop:20}}
                        onPress={this.goToLifeCounter}
                    />
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
        flexDirection:"column",
        padding:20,
        width:"100%"
    },
    testText:
    {
        color:"white",
        fontFamily:"bold"
    },
    box:
    {
        backgroundColor:"white",
        width:100,
        height:100
    }
});
