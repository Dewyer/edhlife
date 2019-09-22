import React from "react";
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator, Picker } from 'react-native';
import BasicBackground from "./BasicBackground";

export interface Props {

}

export interface State {

}

export default class PresetPicker extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state =
        {
        }
    }

    render() {
        return (
            <Picker
                selectedValue={"asd"}
                style={styles.pickerStyle}
                itemStyle={styles.pickerItemStyle}
                onValueChange={(itemValue, itemIndex) => this.setState({ })}>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pickerStyle:
    {
        height:30,
        width:200,
        borderColor:"#4ecca3",
        backgroundColor:"black",
        color:"white"
    },
    pickerItemStyle:
    {
        
    }

});
