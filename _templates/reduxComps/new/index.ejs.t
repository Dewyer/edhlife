---
to: components/<%= name %>.tsx
---
import React from "react";
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator, Picker } from 'react-native';

export interface Props {

}

export interface State {

}

class <%= name %> extends React.Component<Props, State> 
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

export default connect(
    (state: EdhAppState, ownProps): Partial<Props> =>
    {
        return {
            ...ownProps,

        };
    },
    (dispatch: Dispatch<any>): Partial<Props> => ({

    })
)(<%= name %>);

const styles = StyleSheet.create({
    container:{
        flex:1
    }

});
