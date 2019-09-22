import React from "react";
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator } from 'react-native';
import BasicBackground from "./BasicBackground";

export interface Props {

}

export interface State {

}

export default class LoadingScreen extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state =
            {
            }
    }

    render() {
        return (
            <BasicBackground>
                <ActivityIndicator size="large" color="#4ecca3" />
            </BasicBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }

});
