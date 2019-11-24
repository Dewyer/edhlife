import React, { Dispatch } from "react";
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator } from 'react-native';
import BasicBackground from "./BasicBackground";
import PresetPicker from "./PresetPicker";
import BasicText from "./BasicText";
import IconButton from "./IconButton";
import TitleSection from "./TitleSection";
import InputWrapperWithLabel from "./InputWrapperWithLabel";
import BasicPicker from "./BasicPicker";
import { connect } from "react-redux";
import { EdhAppState } from "../reducers";
import { PlayerPresetData } from "../models/PlayerPresetData";
import { updateNumberOfPlayers } from "../actions/gameSettings";
import PlayerSettings from "./PlayerSettings";

export interface Props
{
    playerPresets?:PlayerPresetData[],
    updateNumberOfPlayers: (no: number) =>void
}

export interface State
{

}

class PlayersManager extends React.Component<Props, State> {

    constructor(props: Props)
    {
        super(props);
        this.state =
            {
            }
    }

    getPlayerSettingsForPlayer(player: PlayerPresetData): React.ReactNode
    {
        return(
            <PlayerSettings 
                playerData={player}
            />
        );
    }

    render()
    {
        const possiblePlayerOptions = [1, 2, 3, 4, 5, 6, 7,].map(x => ({ label: x + "", value: x + "" }));
        console.log(this.props.playerPresets!);
        return (
            <TitleSection
                title={"Players"}
                childrenStyles={styles.container}
                style={{marginTop:20,height:"auto"}}
            >
                <InputWrapperWithLabel
                    title={"Number of players:"}
                >
                    <BasicPicker 
                        pickerOptions={possiblePlayerOptions}
                        onValueChange={(val,ind)=>{this.props.updateNumberOfPlayers!(parseInt(val))}}
                        defaultSelection={this.props.playerPresets!.length+""}
                    />
                </InputWrapperWithLabel>
                <InputWrapperWithLabel
                    title={"Player:"}
                    childrenContainerStyle={styles.playersContainer}
                    style={{marginTop:20}}
                >
                    {this.props.playerPresets!.map(player=>this.getPlayerSettingsForPlayer(player))}
                </InputWrapperWithLabel>     
            </TitleSection>
        );
    }
}

export default connect(
    (state: EdhAppState, ownProps): Partial<Props> =>
    {
        return {
            ...ownProps,
            playerPresets:state.gameSettingsSate.players

        };
    },
    (dispatch: Dispatch<any>): Partial<Props> => ({
        updateNumberOfPlayers:(no:number)=>dispatch(updateNumberOfPlayers(no))
    })
)(PlayersManager);


const styles = StyleSheet.create({

    container: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column" 
    },
    playersContainer:
    {
        flexDirection:"column",
        justifyContent:"center",
        width:"80%"
    }
});
