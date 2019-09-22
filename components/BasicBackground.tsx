import React from "react";
import { StyleSheet, Text, View, Image  } from 'react-native';

export interface Props 
{
    containerStyle?:any
}

export interface State {

}

export default class BasicBackground extends React.Component<Props, State> {

    constructor(props:Props)
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
                style={styles.blackBg}
            >
                <Image  
                    source={require("../assets/cyclo.jpg")} 
                    style={styles.cyco} 
                />
                <View
                    style={[styles.content, this.props.containerStyle]}
                >
                    {this.props.children}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        height:null,
        position:"relative",
        top:0,
        left:0,
        zIndex:99
    },
    blackBg:
    {
        backgroundColor:"black",
        width:"100%",
        height:"100%",
        zIndex:0,
    },
    cyco:
    {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity:0.6,
        zIndex: 0

    }
});
