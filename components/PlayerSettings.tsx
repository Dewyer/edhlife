import React from "react";
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator, Picker } from 'react-native';
import { PlayerPresetData } from "../models/PlayerPresetData";
import InputWrapperWithLabel from "./InputWrapperWithLabel";
import BasicTextInput from "./BasicTextInput";
import BasicButton from "./BasicButton";

export interface Props
{
    playerData: PlayerPresetData,
}

export interface State
{

}

export default class PlayerSettings extends React.Component<Props, State>
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
                style={styles.container}
            >
                <InputWrapperWithLabel
                    title={"Name:"}
                    childrenContainerStyle={{
                        width:"70%",
                        justifyContent:"flex-end"
                    }}
                >
                    <BasicTextInput
                        value={this.props.playerData.name}
                        onNewValue={()=>{}}
                        style={{width:"100%"}}
                    />
                </InputWrapperWithLabel>
                <BasicButton text={"hg"} style={{marginTop:20,width:"20%"}}/>
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
        width:"100%",
        marginBottom:20,
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"flex-end"
    }

});
