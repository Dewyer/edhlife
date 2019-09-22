
import { Action } from 'redux';
import { AppActions } from '../actions';
import { GameSettingsSate, defaultGameSettingsState } from './gameSettingsReducer';


export interface AppState {
    isApplicationLoaded : boolean,
    gameSettingsSate:GameSettingsSate

}

export function defaultState(): AppState {
    return {
        isApplicationLoaded : false,
        gameSettingsSate: defaultGameSettingsState()
    };
}

export function mainReducer(state: AppState = defaultState(), action: Action): AppState {

    return state;
}