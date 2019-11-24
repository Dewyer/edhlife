
import { Action, combineReducers } from 'redux';
import { AppActions } from '../actions';
import { GameSettingsSate, defaultGameSettingsState, gameSettingsReducer } from './gameSettingsReducer';


export interface EdhAppState {
    gameSettingsSate:GameSettingsSate

}

export function defaultState(): EdhAppState {
    return {
        gameSettingsSate: defaultGameSettingsState()
    };
}

export const rootReducer = combineReducers<EdhAppState>({
    gameSettingsSate: gameSettingsReducer as any,
});