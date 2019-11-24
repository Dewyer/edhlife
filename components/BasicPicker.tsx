import React from "react";
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator, Picker } from 'react-native';

export interface Props
{
    onValueChange?: (itemValue: string, itemIndex: number) => void,
    pickerOptions: PickerOption[],
    defaultSelection?:string
}

export interface State
{

}

export interface PickerOption
{
    label:string,
    value:string
}

export default class BasicPicker extends React.Component<Props, State>
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
            <Picker
                selectedValue={this.props.defaultSelection ? this.props.defaultSelection : ""}
                style={styles.pickerStyle}
                itemStyle={styles.pickerItemStyle}
                onValueChange={(itemValue, itemIndex) =>
                {
                    if (this.props.onValueChange)
                    {
                        this.props.onValueChange(itemValue,itemIndex);
                    }
                }}>
                {this.props.pickerOptions.map(x => <Picker.Item key={x.value} {...x}/>)}
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
        height: 30,
        width: 200,
        borderColor: "#4ecca3",
        backgroundColor: "black",
        color: "white"
    },
    pickerItemStyle:
    {

    }

});
