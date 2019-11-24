---
to: components/<%= name %>.tsx
---
import React from "react";
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator, Picker } from 'react-native';

export interface Props {

}

export interface State {

}

export default class <%= name %> extends React.Component<Props, State> 
{    
    
    constructor(props: Props)
    {
        super(props);
        this.state =
            {
            }
    }

    render() {
        return (
            null
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }

});
