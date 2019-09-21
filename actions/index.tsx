import { Action, Dispatch } from 'redux';

export const ACTION_NEW_LOCATION = "NEW_LOCATION";

export function isAction<A extends Action>(action: Action, type: string): action is A {
    return action.type === type;
}

export interface IActionNewHeading extends Action {
    type: "NEW_HEADING",
    heading: number
}

export type AppActions = undefined;

export function dispatchNewHeading(heading: number): IActionNewHeading {
    return {
        type: "NEW_HEADING",
        heading: heading
    };
}
