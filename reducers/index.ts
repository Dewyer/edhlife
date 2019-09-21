
import { Action } from 'redux';
import { AppActions } from '../actions';


export interface AppState {

}

export function defaultState(): AppState {
    return {
    };
}

export function mainReducer(state: AppState = defaultState(), action: Action): AppState {

    return state;
}