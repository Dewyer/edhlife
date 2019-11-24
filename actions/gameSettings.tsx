import { createAction } from 'redux-actions';
import { GameSettingsSate } from '../reducers/gameSettingsReducer';

export enum GameSettingsActionTypes
{
    NEW_NUMBER_OF_PLAYERS = 'NEW_NUMBER_OF_PLAYERS',
}

export const updateNumberOfPlayers = createAction<number>(GameSettingsActionTypes.NEW_NUMBER_OF_PLAYERS);
