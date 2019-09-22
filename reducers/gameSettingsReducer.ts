
import {
    AppActions,
} from '../actions';
import { AppState } from ".";
import { PlayerPresetData } from '../models';


export interface GameSettingsSate 
{
    numberOfPlayers: number,
    players: PlayerPresetData[],
    commanderDamage:boolean,
    startingLifeTotal:number,
    
}

export function defaultGameSettingsState(): GameSettingsSate {
    return {
        numberOfPlayers:0,
        players:[],
        commanderDamage: false,
        startingLifeTotal: 20,
    };
}

export function metadataStateReducer(state: AppState, action: AppActions): GameSettingsSate {

    return state.gameSettingsSate;
}