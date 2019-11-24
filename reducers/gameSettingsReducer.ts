
import {
    AppActions,
} from '../actions';
import { EdhAppState } from ".";
import { PlayerPresetData, getEmptyPlayerPresetData } from '../models/PlayerPresetData';
import { handleActions } from 'redux-actions';
import { GameSettingsActionTypes } from '../actions/gameSettings';
import PlayerStateUtils from '../utils/playerStateUtils';


export interface GameSettingsSate 
{
    players: PlayerPresetData[],
    commanderDamage:boolean,
    startingLifeTotal:number,
    
}

export function defaultGameSettingsState(): GameSettingsSate {
    return {
        players:[getEmptyPlayerPresetData()],
        commanderDamage: false,
        startingLifeTotal: 20,
    };
}

export const gameSettingsReducer = handleActions<GameSettingsSate, unknown>(
    {
        [GameSettingsActionTypes.NEW_NUMBER_OF_PLAYERS]:(state,action)=>
        {
            const newPlayerNumber = action.payload as number;
            const newPlayerPresets = PlayerStateUtils.getNewPlayerPresetsFromNewPlayerNumbers(state.players,newPlayerNumber);
            return({
                ...state,
                players:newPlayerPresets

            });
        }
    },
    defaultGameSettingsState()
);