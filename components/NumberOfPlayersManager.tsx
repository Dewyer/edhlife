import React from "react";
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator } from 'react-native';
import BasicBackground from "./BasicBackground";
import PresetPicker from "./PresetPicker";
import BasicText from "./BasicText";
import IconButton from "./IconButton";
import TitleSection from "./TitleSection";

export interface Props
{

}

export interface State
{

}

export default class NumberOfPlayersManager extends React.Component<Props, State> {

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
            <TitleSection
                title={"Settings"}
                style={{marginTop:20}}
            >
                <Text>asd</Text>
            </TitleSection>
        );
    }
}

const styles = StyleSheet.create({


});
